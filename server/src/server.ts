import express from 'express';

import { findAllCourses } from './queries';


const app = express();

app.listen(8090, () => {
    console.log('successfully running!');
})

findAllCourses().then(res => console.log(JSON.stringify(res)));
