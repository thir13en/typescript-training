import express, { Application } from 'express';

import { findAllCourses } from './queries';
import { initRestApi } from './api';


const app: Application = express();

initRestApi(app);

// start server
app.listen(8090, () => {
    console.log('successfully running!');
})
