'use strict';

const express = require('express');

const { readAll, deleteRecord, addRecord } = require('./controllers.js');

const router = express.Router();

router.get('/record', readAll);
router.delete('/record/:id', deleteRecord);
router.post('/record', addRecord);


module.exports = router;