import { Request, Response } from 'express';
import partial from 'lodash/partial';

import { updateLesson } from '../queries';
import onSuccess from './onSuccess';
import onError from './onError';
import onDatabaseError from './onDatabaseError';


export default function apiPatchLesson(req: Request, res: Response) {
    const lessonId = req.params.id;

    updateLesson(lessonId, req.body)
        .then(partial(onSuccess, res))
        .catch(partial(onDatabaseError, res))
        .catch(partial(onError, res, 'could not update lesson'));
}
