export default interface Lesson {
    readonly seqNo: number,
    readonly url: string,
    description: string,
    duration: string,
    pro: boolean,
    tags?: string,
    courseId: string,
}
