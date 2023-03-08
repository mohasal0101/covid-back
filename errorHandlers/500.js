//writing a 500 error handler

'use strict';

module.exports = (err, req, res, next) => {
    res.status(500).send('Server Error');
    }

    