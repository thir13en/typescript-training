import { Response } from 'express';

export default function onError(res: Response, message: string, err: any): void {
    console.error('promise chain failed:', message, err);

    res.status(500).send()
}
