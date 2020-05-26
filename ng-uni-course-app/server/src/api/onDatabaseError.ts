import { Response } from 'express';
// when there is no type definition at all
const hri = require('human-readable-ids').hri;
// this is not working
// import * as hri from 'human-readable-ids';


export default function onDatabaseError(res: Response, err: any) {
    const id = hri.random();
    console.error('Database error', id, err);
    // database error messages should never travel to the client
    res
        .status(500)
        .send({ code: 'ERR-002', message: `Database error with code ${id}` });
}
