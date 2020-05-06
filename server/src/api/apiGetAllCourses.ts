import { Request, Response } from 'express';
import partial from 'lodash/partial';

import { findAllCourses } from '../queries';
import onError from './onError';


const apiGetAllCourses = (req: Request, res: Response) => findAllCourses()
    .then(
        courses => res.status(200).json({ courses }),
    )
    .catch(partial(onError, res, 'find all courses failed'));

export default apiGetAllCourses;
