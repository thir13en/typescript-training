import express, { Application } from 'express';

import { findAllCourses } from './queries';


const app: Application = express();

app.route('/api/courses')
    .get((req, res) => findAllCourses().then(
        courses => res.status(200).json(courses),
    ));

app.listen(8090, () => {
    console.log('successfully running!');
})
