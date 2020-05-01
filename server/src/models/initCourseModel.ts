import { DataTypes, Model, Sequelize } from 'sequelize';


class Course extends Model {}

export default function initCourseModel(sequelize: Sequelize) {

    Course.init({
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

    return Course;

}

