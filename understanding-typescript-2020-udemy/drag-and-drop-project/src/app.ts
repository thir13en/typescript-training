class ProjectInput {
    private templateEl: HTMLTemplateElement;
    private hostEl: HTMLDivElement;
    readonly el: HTMLFormElement;
    private titleElField: HTMLInputElement;
    // private descriptionElField: HTMLInputElement;
    // private peopleElField: HTMLInputElement;

    constructor() {
        this.templateEl = document.getElementById('project-input')! as HTMLTemplateElement;
        this.hostEl = document.getElementById('app')! as HTMLDivElement;

        const importedHTMLContent = document.importNode(this.templateEl.content, true);
        this.el = importedHTMLContent.firstElementChild as HTMLFormElement;
        this.el.id = 'user-input';
        this.titleElField = this.el.querySelector('#title')! as HTMLInputElement;
        // this.descriptionElField = this.el.querySelector('#description')! as HTMLInputElement;
        // this.peopleElField = this.el.querySelector('#people')! as HTMLInputElement;
        this.configure(this.el);
        this.attach(this.el);
    }

    private submitHandler(ev: Event) {
        ev.preventDefault();
        console.log(this.titleElField.value);
    }

    private configure(el: HTMLFormElement) {
        el.addEventListener('submit', this.submitHandler.bind(this));
        debugger;
    }

    private attach(el: HTMLFormElement) {
        this.hostEl.insertAdjacentElement('afterbegin', el);
    }
}

const projectInput = new ProjectInput();
