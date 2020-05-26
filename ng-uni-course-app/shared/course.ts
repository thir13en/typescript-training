import Lesson from './lesson';


export default interface Course {
    readonly seqNo: number,
    readonly url: string,
    iconUrl: string,
    courseListIcon: string,
    description: string,
    longDescription: string,
    comingSoon?: boolean,
    isNew?: boolean,
    isOngoing?: boolean,
    lessons: Lesson[],
}
