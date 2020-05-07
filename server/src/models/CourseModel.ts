import { DataTypes, Model } from 'sequelize';

import { sequelize } from '../orm';
import LessonModel from './LessonModel';


class CourseModel extends Model {}

CourseModel.init({
    description: DataTypes.STRING,
    url: DataTypes.STRING,
    longDescription: DataTypes.TEXT,
    iconUrl: DataTypes.STRING,
    courseListIcon: DataTypes.STRING,
    seqNo: DataTypes.NUMBER,
    comingSoon: DataTypes.BOOLEAN,
    isNew: DataTypes.BOOLEAN,
    isOngoing: DataTypes.BOOLEAN,
}, { sequelize, modelName: 'Course' });

CourseModel.hasMany(LessonModel, { foreignKey: 'courseId' });

export default CourseModel;
