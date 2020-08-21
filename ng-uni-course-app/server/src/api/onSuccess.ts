import { Response } from 'express';

export default function onSuccess(res: Response, data: any) {
    res.status(200).json({ payload: data });
}
