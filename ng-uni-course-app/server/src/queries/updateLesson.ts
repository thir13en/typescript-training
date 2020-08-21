import { LessonModel } from '../models';


export default function updateLesson(id: string, props: any) {

    return LessonModel.update(
        props,
        {
            where: { id }
        });
}
