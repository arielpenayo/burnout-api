import Sequelize from 'sequelize';
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_USER } from '../config/config.js'; 
const Op = Sequelize.Op;
const operatorsAliases = {
  $gt: Op.gt,
  $gte: Op.gte,
  $lte: Op.lte,
  $between: Op.between,
  $in: Op.in,
  $lt: Op.lt,
  $or: Op.or,
  $not: Op.not,
  $like: Op.like,
  $ne: Op.ne
}

const sequelize = new Sequelize({
    database:DB_NAME,
    username:DB_USER,
    password:DB_PASSWORD,
    host:DB_HOST,
    dialect: 'mysql',
    operatorsAliases
});


export default sequelize;