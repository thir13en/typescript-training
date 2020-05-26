import { CourseModel, LessonModel } from '../models';

export default function findCourseDetail(courseId: number) {
    return CourseModel.findByPk(courseId, {
        include: [{ model: LessonModel}],
    });
}
