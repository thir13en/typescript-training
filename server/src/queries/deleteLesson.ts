import { LessonModel } from '../models';


export default function deleteLesson(id: string) {
    return LessonModel.destroy({ where: { id }});
}
