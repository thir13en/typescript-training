import { ProjectStatus } from '../enums/project-status.enum.js';

export class Project {

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
