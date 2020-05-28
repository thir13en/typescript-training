import { FindOptions } from 'sequelize';

import { CourseModel } from '../models';
import CourseSummary from '../../../shared/interfaces/course-summary';
import { createCourseSummaries } from '../../../shared/middleware';


export default function findAllCourses(): Promise<CourseSummary[]> {
    const queryOptions: FindOptions = {
        order: ['seqNo'],
    }
    return CourseModel.findAll(queryOptions).then(createCourseSummaries);
}
