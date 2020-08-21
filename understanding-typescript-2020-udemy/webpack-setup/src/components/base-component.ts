// base class, responsible for connecting and rendering stuff in the template
export abstract class Component<T extends HTMLElement, U extends HTMLElement> {
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
