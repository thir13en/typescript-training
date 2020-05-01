"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class Course extends sequelize_1.Model {
}
function initCourseModel(sequelize) {
    Course.init({
        description: sequelize_1.DataTypes.STRING,
        url: sequelize_1.DataTypes.STRING,
        longDescription: sequelize_1.DataTypes.TEXT,
        iconUrl: sequelize_1.DataTypes.STRING,
        courseListIcon: sequelize_1.DataTypes.STRING,
        seqNo: sequelize_1.DataTypes.NUMBER,
        comingSoon: sequelize_1.DataTypes.BOOLEAN,
        isNew: sequelize_1.DataTypes.BOOLEAN,
        isOngoing: sequelize_1.DataTypes.BOOLEAN,
    }, { sequelize, modelName: 'Course' });
    return Course;
}
exports.default = initCourseModel;
