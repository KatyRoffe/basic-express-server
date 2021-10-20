'use strict';

const express = require('express');

const app = express();



app.get('/person', (request, response) => {
    response.status(200).json('I am a name.')
});

const start = (PORT) => {
    app.listen(PORT, () => {
        console.log(`Running on PORT ${PORT} `)
    });
}

module.exports = {start, app};
