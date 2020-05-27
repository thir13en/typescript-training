import { CourseModel } from '../models';
import { FindOptions } from 'sequelize';
import CourseDetail from '../../../shared/interfaces/course-detail';

export default function findAllCourses(): Promise<CourseDetail> {
    const queryOptions: FindOptions = {
        order: ['seqNo'],
    }
    return CourseModel.findAll(queryOptions);
}
