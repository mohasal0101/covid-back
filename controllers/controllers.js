'use strict';

const { modelRecord } = require('../covidModels');


const readAll = async (req, res) => {
    try {
        const data = await modelRecord.findAll();
        res.status(200).json(data);
    }
    catch (error) {
        res.status(500).json(error);
    }

}


const deleteRecord = async (req, res, next) =>
{
    try {
        const data = await modelRecord.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(data);
    }
    catch (error) {
        res.status(500).json(error);
    }
}

const addRecord = async (req, res, next) =>
{
    try {
        const data = await modelRecord.create(req.body);
        res.status(200).json(data);
    }
    catch (error) {
        res.status(500).json(error);
    }
}

module.exports = {
    readAll,
    deleteRecord,
    addRecord
}



