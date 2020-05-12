import { Request, Response } from 'express';
import partial from 'lodash/partial';

import onSuccess from './onSuccess';
import onError from './onError';
import onDatabaseError from './onDatabaseError';
import { createLesson } from '../queries';


export default function apiPostCreateLesson(req: Request, res: Response) {
    // TODO add notes on request headers!
    console.log(req.body);
    createLesson(req.body)
        .then(partial(onSuccess, res))
        .catch(partial(onDatabaseError, res))
        .catch(partial(onError, res, 'find course detail courses failed'));
}
