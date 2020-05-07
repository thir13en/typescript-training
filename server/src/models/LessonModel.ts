import { DataTypes, Model } from 'sequelize';

import { sequelize } from '../orm';
import CourseModel from './CourseModel';


class LessonModel extends Model {}

LessonModel.init({
    url: DataTypes.STRING,
    description: DataTypes.STRING,
    duration: DataTypes.STRING,
    seqNo: DataTypes.NUMBER,
    courseId: DataTypes.NUMBER,
    pro: DataTypes.BOOLEAN,
    tags: DataTypes.STRING,
    gitHubUrl: DataTypes.STRING,
}, { sequelize, modelName: 'Lesson' });

// TODO: solve issue here
LessonModel.belongsTo(CourseModel, { foreignKey: 'courseId' })

export default LessonModel;
