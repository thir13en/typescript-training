import { Application } from 'express';

import apiErrorHandler from './apiErrorHandler';
import onError from './onError';
import onSuccess from './onSuccess';
import onDatabaseError from './onDatabaseError';
import apiGetAllCourses from './apiGetAllCourses';
import apiGetCourseDetail from './apiGetCourseDetail';
import apiPostCreateLesson from './apiPostCreateLesson';
import apiPatchLesson from './apiPatchLesson';
import apiDeleteLesson from './apiDeleteLesson';


export function initRestApi(app: Application) {
    app.route('/api/courses').get(apiGetAllCourses);
    app.route('/api/courses/:id').get(apiGetCourseDetail);

    app.route('/api/lessons').post(apiPostCreateLesson);
    app.route('/api/lessons/:id').patch(apiPatchLesson);
    app.route('/api/lessons/:id').delete(apiPatchLesson);
}

export { apiErrorHandler, onSuccess, onError, onDatabaseError };
