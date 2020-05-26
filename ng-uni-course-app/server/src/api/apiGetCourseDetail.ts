import { Request, Response } from 'express';
import partial from 'lodash/partial';

import onSuccess from './onSuccess';
import onError from './onError';
import { findCourseDetail } from '../queries';
import onDatabaseError from './onDatabaseError';


const apiGetCourseDetail = (req: Request, res: Response) => {
    const courseId = parseInt(req.params.id);
    findCourseDetail(courseId)
        .then(partial(onSuccess, res))
        .catch(partial(onDatabaseError, res))
        .catch(partial(onError, res, 'find course detail courses failed'));
};

export default apiGetCourseDetail;

