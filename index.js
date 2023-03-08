'use strict';

const server = require('./server.js');
require('dotenv').config();
const { db } = require('./covidModels');

const PORT = process.env.PORT;

db.sync().then(() => {
    server.start(PORT);
}
);
