import Bluebird from 'bluebird';

import { CourseModel, LessonModel } from '../models';
import { CourseDetail, createCourseDetail } from '../../../shared/interfaces';


export default function findCourseDetail(courseId: number): Bluebird<CourseDetail> {
    return CourseModel.findByPk(courseId, {
        include: [{ model: LessonModel}],
    }).then(createCourseDetail);
}
