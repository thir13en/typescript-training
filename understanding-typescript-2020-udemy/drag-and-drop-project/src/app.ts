enum ProjectStatus { Active, Finished }

// base class, responsible for connecting and rendering stuff in the template
abstract class Component<T extends HTMLElement, U extends HTMLElement> {
    private templateEl: HTMLTemplateElement;
    private hostEl: T
    readonly el: U;

    constructor(
        templateId: string,
        hostElId: string,
        insertAtStart: boolean,
        newElId?: string
    ) {
        this.templateEl = document.getElementById(templateId)! as HTMLTemplateElement;
        this.hostEl = document.getElementById(hostElId)! as T;

        const importedHTMLContent = document.importNode(this.templateEl.content, true);
        this.el = importedHTMLContent.firstElementChild as U;
        if (newElId) {
            this.el.id = newElId;
        }

        this.attach(this.el, insertAtStart);
    }

    protected attach(el: U, insertAtStart: boolean) {
        this.hostEl.insertAdjacentElement(
            insertAtStart ? 'afterbegin' : 'beforeend',
            el
        );
    }

    protected abstract configure(el?: U): void;
    protected abstract renderContent(el: U): void;
}

class Project {

    get persons() {
        if (this.people === 1) {
            return this.people + ' person';
        } else {
            return this.people + ' persons';
        }
    }

    constructor(
        public id: string,
        public title: string,
        public description: string,
        public people: number,
        public status: ProjectStatus
    ) {}
}

class ProjectItem extends Component<HTMLUListElement, HTMLLIElement>{
    constructor(
        hostId: string,
        private project: Project,
    ) {
        super('single-project', hostId, false, project.id);
        this.configure();
        this.renderContent(this.el);
    }

    protected configure() {}

    protected renderContent(el: HTMLLIElement) {
        el.querySelector('h2')!.textContent = this.project.title;
        el.querySelector('h3')!.textContent = this.project.persons + ' assigned';
        el.querySelector('p')!.textContent = this.project.description;
    }
}

// Project State Management
type Listener<T> = (items: T[]) => void;

class State<T> {
    protected listeners: Listener<T>[] = [];

    addListener(listenerFn: Listener<T>) {
        this.listeners.push(listenerFn);
    }
}

class ProjectsState extends State<Project>{
    private projects: Project[] = [];

    // singleton pattern
    private static instance: ProjectsState;
    static getInstance() {
        if (!this.instance) {
            this.instance = new ProjectsState();
        }
        return this.instance;
    }

    // singleton pattern
    private constructor() {
        super();
    }

    addProject(title: string, description: string, people: number) {
        const newProject = new Project(
            Math.random().toString(),
            title,
            description,
            people,
            ProjectStatus.Active,
        );

        this.projects.push(newProject);
        for (const listenerFn of this.listeners) {
            listenerFn(this.projects.slice());
        }
    }
}

const projectsState = ProjectsState.getInstance();

// Validation
interface Validatable {
    value: string | number,
    required?: boolean,
    minLength?: number,
    maxLength?: number
    min?: number;
    max?: number;
}

function validate(validatableInput: Validatable) {
    let isValid = true;

    if (validatableInput.required) {
        isValid = isValid && !!validatableInput.value.toString().trim().length;
    }
    if (validatableInput.minLength !== undefined && typeof validatableInput.value === 'string') {
        isValid = isValid && validatableInput.value.length >= validatableInput.minLength;
    }
    if (validatableInput.maxLength !== undefined && typeof validatableInput.value === 'string') {
        isValid = isValid && validatableInput.value.length <= validatableInput.maxLength;
    }
    if (validatableInput.min !== undefined && typeof validatableInput.value === 'number') {
        isValid = isValid && validatableInput.value >= validatableInput.min;
    }
    if (validatableInput.max !== undefined && typeof validatableInput.value === 'number') {
        isValid = isValid && validatableInput.value <= validatableInput.max;
    }

    return isValid;
}

// autobind decorator
function Autobind(_: any, _2: string | Symbol, propDescriptor: PropertyDescriptor) {
    const originalMethod = propDescriptor.value;
    const adjustedDescriptor: PropertyDescriptor = {
        configurable: true,
        get() {
            return originalMethod.bind(this);
        }
    }
    return adjustedDescriptor;
}

class ProjectsList extends Component<HTMLDivElement, HTMLElement>{
    private assignedProjects: Project[];

    constructor(private type: 'active' | 'finished') {
        super('project-list', 'app', false, `${type}-projects`);
        this.assignedProjects = [];

        this.configure();
        this.renderContent(this.el);
    }

    protected configure() {
        // observer pattern implementation
        projectsState.addListener((projects: Project[]) => {
            const relevantProjects = projects.filter(prj => {
                if (this.type === 'active') {
                    return prj.status === ProjectStatus.Active;
                } else {
                    return prj.status === ProjectStatus.Finished;
                }
            });
            this.assignedProjects = relevantProjects;
            this.renderProjects();
        });
    }

    protected renderContent(el: HTMLElement) {
        const listId = `${this.type}-projects-list`;
        el.querySelector('ul')!.id = listId;
        el.querySelector('h2')!.textContent = `${this.type.toUpperCase()} PROJECTS`;
    }

    private renderProjects() {
        const listEl: HTMLUListElement = this.el.querySelector(`#${this.type}-projects-list`)! as HTMLUListElement;

        // clean up last projects for re-rendering
        listEl.innerHTML = '';
        for(const prjItem of this.assignedProjects) {
            new ProjectItem(listEl.id, prjItem);
        }
    }
}

class ProjectInput extends Component<HTMLDivElement, HTMLFormElement>{
    private titleElField!: HTMLInputElement;
    private descriptionElField!: HTMLInputElement;
    private peopleElField!: HTMLInputElement;

    constructor() {
        super('project-input', 'app', true, 'user-input');
        this.configure(this.el);
    }

    private gatherUserInput(): [string, string, number] | void {
        const enteredTitleValue = this.titleElField.value;
        const enteredDescriptionValue = this.descriptionElField.value;
        const enteredPeopleValue = this.peopleElField.value;

        const titleValidatable: Validatable = {
            value: enteredTitleValue,
            required: true,
        };
        const descriptionValidatable: Validatable = {
            value: enteredDescriptionValue,
            required: true,
            minLength: 5,
        };
        const peopleValidatable: Validatable = {
            value: +enteredPeopleValue,
            required: true,
            min: 1,
            max: 5,
        };

        if (!validate(titleValidatable) || !validate(descriptionValidatable) || !validate(peopleValidatable)) {
            alert('You need to fill all fields');
            return;
        } else {
            return [enteredTitleValue, enteredDescriptionValue, +enteredPeopleValue];
        }
    }

    private clearInputs() {
        this.titleElField.value = '';
        this.descriptionElField.value = '';
        this.peopleElField.value = '';
    }

    @Autobind
    private submitHandler(ev: Event) {
        ev.preventDefault();
        const userInput = this.gatherUserInput();
        if (Array.isArray(userInput)) {
            this.clearInputs();
            const [title, desc, people] = userInput;
            projectsState.addProject(title, desc, people);
        }
    }

    protected configure(el: HTMLFormElement) {
        this.titleElField = this.el.querySelector('#title')! as HTMLInputElement;
        this.descriptionElField = this.el.querySelector('#description')! as HTMLInputElement;
        this.peopleElField = this.el.querySelector('#people')! as HTMLInputElement;

        el.addEventListener('submit', this.submitHandler);
    }

    protected renderContent() {}
}

const projectInput = new ProjectInput();
const activeProjectsLists = new ProjectsList('active');
const finishedProjectsLists = new ProjectsList('finished');
