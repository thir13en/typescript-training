import { Sequelize } from 'sequelize';

const dbUrl = 'postgres://admin:secret@localhost:5432/ang-uni-typescript';
const sequelize: Sequelize = new Sequelize(dbUrl);

export default sequelize;
