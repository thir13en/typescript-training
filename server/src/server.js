"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dbUrl = 'postgres://admin:secret@localhost:5432/ang-uni-typescript';
const sequelize = new Sequelize(dbUrl);
const CourseModel = initC;
console.log('server is running!');
