import { Request, Response } from 'express';

import { findAllCourses } from '../queries';


const apiGetAllCourses = (req: Request, res: Response) => findAllCourses().then(
    courses => res.status(200).json({ courses }),
);

export default apiGetAllCourses;
