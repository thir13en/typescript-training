import { CourseModel } from '../models';
import { FindOptions } from 'sequelize';

export default function findAllCourses() {
    const queryOptions: FindOptions = {
        order: ['seqNo'],
    }
    return CourseModel.findAll(queryOptions);
}
