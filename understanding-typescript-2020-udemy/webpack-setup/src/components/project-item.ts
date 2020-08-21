import Autobind from '../decorators/autobind';
import { Component } from './base-component';
import { Draggable } from '../interfaces/drag-drop.interface';
import { Project } from '../models/project';


export class ProjectItem extends Component<HTMLUListElement, HTMLLIElement> implements Draggable {
    constructor(
        hostId: string,
        private project: Project,
    ) {
        super('single-project', hostId, false, project.id);
        this.configure();
        this.renderContent(this.el);
    }

    @Autobind
    dragStartHandler(event: DragEvent) {
        event.dataTransfer!.setData('text/plain', this.project.id);
        event.dataTransfer!.effectAllowed = 'move';
    }

    dragEndHandler(_: DragEvent) {}

    protected configure() {
        this.el.addEventListener('dragstart', this.dragStartHandler);
        this.el.addEventListener('dragend', this.dragEndHandler);
    }

    protected renderContent(el: HTMLLIElement) {
        el.querySelector('h2')!.textContent = this.project.title;
        el.querySelector('h3')!.textContent = this.project.persons + ' assigned';
        el.querySelector('p')!.textContent = this.project.description;
    }
}
