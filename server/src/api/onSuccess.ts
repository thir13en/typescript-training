import { Response } from 'express';

export default function onSuccess(res: Response, data: any) {
    res.status(500).json({ payload: data });
}
