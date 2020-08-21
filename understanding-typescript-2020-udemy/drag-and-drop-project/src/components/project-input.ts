import { projectsState } from '../state/project-state.js';
import Autobind from '../decorators/autobind.js';
import validate from '../utils/validate.js';
import { Validatable } from '../interfaces/validatable.interface.js';
import { Component } from './base-component.js';


export class ProjectInput extends Component<HTMLDivElement, HTMLFormElement>{
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
