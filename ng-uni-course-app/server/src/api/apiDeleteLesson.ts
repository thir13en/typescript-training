import { Request, Response } from 'express';
import partial from 'lodash/partial';

import onSuccess from './onSuccess';
import onError from './onError';
import onDatabaseError from './onDatabaseError';
import { deleteLesson } from '../queries';


export default function apiDeleteLesson(req: Request, res: Response) {
    const lessonId = req.params.id;

    deleteLesson(lessonId)
        .then(partial(onSuccess, res))
        .catch(partial(onDatabaseError, res))
        .catch(partial(onError, res, 'could not delete lesson'));
}
