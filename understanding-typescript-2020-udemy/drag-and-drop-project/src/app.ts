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

class ProjectInput {
    private templateEl: HTMLTemplateElement;
    private hostEl: HTMLDivElement;
    readonly el: HTMLFormElement;
    private titleElField: HTMLInputElement;
    private descriptionElField: HTMLInputElement;
    private peopleElField: HTMLInputElement;

    constructor() {
        this.templateEl = document.getElementById('project-input')! as HTMLTemplateElement;
        this.hostEl = document.getElementById('app')! as HTMLDivElement;

        const importedHTMLContent = document.importNode(this.templateEl.content, true);
        this.el = importedHTMLContent.firstElementChild as HTMLFormElement;
        this.el.id = 'user-input';
        this.titleElField = this.el.querySelector('#title')! as HTMLInputElement;
        this.descriptionElField = this.el.querySelector('#description')! as HTMLInputElement;
        this.peopleElField = this.el.querySelector('#people')! as HTMLInputElement;
        this.configure(this.el);
        this.attach(this.el);
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
            console.log(title, desc, people);
        }
    }

    private configure(el: HTMLFormElement) {
        el.addEventListener('submit', this.submitHandler);
        debugger;
    }

    private attach(el: HTMLFormElement) {
        this.hostEl.insertAdjacentElement('afterbegin', el);
    }
}

const projectInput = new ProjectInput();
