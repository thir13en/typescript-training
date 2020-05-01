import { Model, Sequelize } from 'sequelize';
import { initCourseModel } from './models';


const dbUrl = 'postgres://admin:secret@localhost:5432/ang-uni-typescript';
const sequelize: Sequelize = new Sequelize(dbUrl);

const CourseModel = initCourseModel(sequelize);


console.log('server is running!');
