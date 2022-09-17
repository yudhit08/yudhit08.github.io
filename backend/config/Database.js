import {Sequelize} from "sequelize";

const db = new Sequelize('portfolio_contact','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;