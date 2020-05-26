import { NextFunction, Request, Response } from 'express';


const apiErrorHandler = (
    err: any,
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    console.error('Api error handler:', err);
    res.status(500).json(
        {
            errorCode: 'ERR-001',
            message: 'Internal server error',
        });
};

export default apiErrorHandler;
