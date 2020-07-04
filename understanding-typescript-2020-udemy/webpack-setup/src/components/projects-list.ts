import { Component } from './base-component.js';
import { DragTarget } from '../interfaces/drag-drop.interface.js';
import { Project } from '../models/project.js';
import { ProjectStatus } from '../enums/project-status.enum.js';
import { ProjectItem } from './project-item.js';
import Autobind from '../decorators/autobind.js';
import { projectsState } from '../state/project-state.js';


export class ProjectsList extends Component<HTMLDivElement, HTMLElement> implements DragTarget {
    private assignedProjects: Project[];

    constructor(private type: 'active' | 'finished') {
        super('project-list', 'app', false, `${type}-projects`);
        this.assignedProjects = [];

        this.configure();
        this.renderContent(this.el);
    }

    @Autobind
    dragOverHandler(event: DragEvent) {
        // drop will only trigger if this method is called, because the default is to not allow dropping
        event.preventDefault();
        if (event.dataTransfer && event.dataTransfer.types[0] === 'text/plain') {
            const listEl = this.el.querySelector('ul')!;

            listEl.classList.add('droppable');
        }
    }

    @Autobind
    dropHandler(event: DragEvent) {
        event.preventDefault();
        const projectId = event.dataTransfer!.getData('text/plain');
        const status = this.type === 'active' ? ProjectStatus.Active : ProjectStatus.Finished;
        projectsState.switchProjectStatus(projectId, status);
    }

    @Autobind
    dragLeaveHandler(_: DragEvent) {
        const listEl = this.el.querySelector('ul')!;

        listEl.classList.remove('droppable');
    }

    protected configure() {
        this.el.addEventListener('dragover', this.dragOverHandler);
        this.el.addEventListener('dragleave', this.dragLeaveHandler);
        this.el.addEventListener('drop', this.dropHandler);
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
