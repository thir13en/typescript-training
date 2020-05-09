import { Request, Response } from 'express';
import partial from 'lodash/partial';

import onSuccess from './onSuccess';
import onError from './onError';
import { createLesson } from '../queries';


export default function apiPostCreateLesson(req: Request, res: Response) {
    createLesson(req.body)
        .then(partial(onSuccess, res))
        .catch(partial(onError, res, 'find course detail courses failed'));
}
