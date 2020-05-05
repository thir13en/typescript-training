import express, { Application } from 'express';

import { findAllCourses } from './queries';
import { apiErrorHandler, initRestApi } from './api';


const app: Application = express();

initRestApi(app);

// important to put after the api definition, since error handler must only trigger when api fails
app.use(apiErrorHandler);

// start server
app.listen(8090, () => {
    console.log('successfully running!');
})
