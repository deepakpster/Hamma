import * as sequelize from "sequelize";
import config from "config";
import HomeModel from "./home";

const db: any = {};
const name: string = config.get("DB.NAME");
const username: string = config.get("DB.USER");
const password: string = config.get("DB.PASS");

export const seq = new sequelize.Sequelize(name, username, password, {
  dialect: "mysql",
  host: config.get("DB.HOST"),
  port: 3306,
});

seq.authenticate();

db.sequelize = seq;
db.Sequelize = sequelize.Sequelize;

db.home = HomeModel(seq, sequelize.Sequelize);

export default db;
