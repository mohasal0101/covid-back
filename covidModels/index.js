"use strict";

const { Sequelize, DataTypes } = require("sequelize");
const record = require('./records.models.js');


const DB_URL = process.env.DATABASE_URL || 'postgres://salah_user:MWJvDuC4IvJxf9LblLrsKBfSR22M0WCf@dpg-cg48uv9mbg5d8849fong-a.oregon-postgres.render.com/salah';

let sequelizeOptions = {

    dialectOptions : {
        ssl : {
            require : true,
            rejectUnauthorized: false
        }
    }

};


const sequelize = new Sequelize(DB_URL, sequelizeOptions);


const modelRecord = record(sequelize,DataTypes);


module.exports = {
    db:sequelize,
    modelRecord
}