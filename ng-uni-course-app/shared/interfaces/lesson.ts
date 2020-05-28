export default interface Lesson {
    readonly id: number,
    readonly seqNo: number,
    readonly url: string,
    description: string,
    duration: string,
    pro: boolean,
    tags?: string,
    courseId: string,
}
