import { DataTypes, Model } from 'sequelize';

import { sequelize } from '../orm';


class LessonModel extends Model {}

LessonModel.init({
    url: DataTypes.STRING,
    description: DataTypes.STRING,
    duration: DataTypes.STRING,
    seqNo: DataTypes.NUMBER,
    pro: DataTypes.BOOLEAN,
    tags: DataTypes.STRING,
    gitHubUrl: DataTypes.STRING,
    courseId: DataTypes.NUMBER,
}, { sequelize, modelName: 'Lesson' });

export default LessonModel;
