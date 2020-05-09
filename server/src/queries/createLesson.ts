import { LessonModel } from '../models';


export default function createLesson(props: any) {
    return LessonModel.create(props)
}
