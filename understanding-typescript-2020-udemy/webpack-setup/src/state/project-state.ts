// Project State Management
import { Project } from '../models/project';
import { ProjectStatus } from '../enums/project-status.enum';

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

    switchProjectStatus(projectId: string, newStatus: ProjectStatus) {
        const project = this.projects.find(project => project.id === projectId);

        if (project && project.status !== newStatus) {
            project.status = newStatus;
        }

        this.updateListeners();
    }

    updateListeners() {
        for(const listenerFn of this.listeners) {
            listenerFn(this.projects.slice());
        }
    }
}

export const projectsState = ProjectsState.getInstance();
