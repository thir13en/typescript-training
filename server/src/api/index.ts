import { Application } from 'express';

import apiGetAllCourses from './apiGetAllCourses';
import apiErrorHandler from './apiErrorHandler';
import onError from './onError';
import onSuccess from './onSuccess';


export function initRestApi(app: Application) {
    app.route('/api/courses').get(apiGetAllCourses);
}

export { apiErrorHandler, onSuccess, onError };
