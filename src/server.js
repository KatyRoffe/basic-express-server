'use strict';

const express = require('express');
const logger = require('./middleware/logger.js');
const validator = require('./middleware/validator');
const error404 = require('./error-handlers/404.js');
const error500 = require('./error-handlers/500.js');

const app = express();
app.use(logger);


app.get('/person', (request, response) => {
    response.status(200).send({ 'name': `${request.query.name}` });
});


app.use(error404);
app.use(error500);

const start = (PORT) => {
    app.listen(PORT, () => {
        console.log(`Running on PORT ${PORT} `)
    });
}

module.exports = {start, app};
