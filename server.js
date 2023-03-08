'use strict';


const express = require('express');
const cors = require('cors');
const notFoundHandler = require('./error-handlers/404.js');
const errorHandler = require('./error-handlers/500.js');
const cardRoutes = require('./routes/card-routes.js');

const app = express();

app.use(cors());
app.use(express.json());

app.use(cardRoutes);
app.get ('/', (req, res) => {
  res.send('Hello World');
}
);

app.use('*', notFoundHandler);
app.use(errorHandler);

function start(port) {
  app.listen(port, () => console.log(`Listening on port ${port}`));
}

module.exports = {
    start: start,
    app: app,
};