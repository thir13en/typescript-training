import { findAllCourses } from './queries';


findAllCourses().then(res => console.log(JSON.stringify(res)));
