import { FindOptions } from 'sequelize';
import Bluebird from 'bluebird';

import { CourseModel } from '../models';
import CourseSummary from '../../../shared/interfaces/course-summary';
import { createCourseSummaries } from '../../../shared/middleware';


export default function findAllCourses(): Bluebird<CourseSummary[]> {
    const queryOptions: FindOptions = {
        order: ['seqNo'],
    }
    return CourseModel.findAll(queryOptions).then(createCourseSummaries);
}
