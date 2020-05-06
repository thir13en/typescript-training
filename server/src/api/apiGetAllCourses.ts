import { Request, Response } from 'express';
import partial from 'lodash/partial';

import { findAllCourses } from '../queries';
import onSuccess from './onSuccess';
import onError from './onError';


const apiGetAllCourses = (req: Request, res: Response) => findAllCourses()
    .then(partial(onSuccess, res))
    .catch(partial(onError, res, 'find all courses failed'));

export default apiGetAllCourses;

