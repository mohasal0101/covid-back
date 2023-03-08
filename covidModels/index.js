"use strict";

const { Sequelize, DataTypes } = require("sequelize");
const record = require('./records.models.js');


const DATA_BASE_URL = process.env.DATABASE_URL || 'postgres://salah:1470@localhost:5432/salah';

let sequelizeOptions = {

    dialectOptions : {
        ssl : {
            require : true,
            rejectUnauthorized: false
        }
    }

};


const sequelize = new Sequelize(DATA_BASE_URL, /* sequelizeOptions */);


const modelRecord = record(sequelize,DataTypes);


module.exports = {
    db:sequelize,
    modelRecord
}