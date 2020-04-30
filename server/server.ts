import { DataTypes, Model, Sequelize } from 'sequelize';


const dbUrl = 'postgres://admin:secret@localhost:5432/ang-uni-typescript';
const sequelize: Sequelize = new Sequelize(dbUrl);

class Course extends Model {}
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

Course.findAll()
    .then(console.log);


console.log('server is running!');
