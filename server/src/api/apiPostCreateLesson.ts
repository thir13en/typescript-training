import { Request, Response } from 'express';
import partial from 'lodash/partial';
// when there is no type definition at all
const hri = require('human-readable-ids').hri;
// this is not working
// import * as hri from 'human-readable-ids';

import onSuccess from './onSuccess';
import onError from './onError';
import { createLesson } from '../queries';


export default function apiPostCreateLesson(req: Request, res: Response) {
    createLesson(req.body)
        .then(partial(onSuccess, res))
        .catch(err => {
            const id = hri.random();
            console.error('Database error', id, err);
            // database error messages should never travel to the client
            res
                .status(500)
                .send({
                    code: 'ERR-002', message: `Creation of lesson failed, err code ${id}`
                });
        })
        .catch(partial(onError, res, 'find course detail courses failed'));
}
