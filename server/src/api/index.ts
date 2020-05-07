import { Application } from 'express';

import apiErrorHandler from './apiErrorHandler';
import onError from './onError';
import onSuccess from './onSuccess';
import apiGetAllCourses from './apiGetAllCourses';
import apiGetCourseDetail from './apiGetCourseDetail';


export function initRestApi(app: Application) {
    app.route('/api/courses').get(apiGetAllCourses);
    app.route('/api/courses/:id').get(apiGetCourseDetail);
}

export { apiErrorHandler, onSuccess, onError };
