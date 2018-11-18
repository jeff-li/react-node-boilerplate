// @flow

const path = require('path');
const express = require('express')
const bodyParser = require('body-parser');
const helmet = require('helmet')
const morgan = require('morgan');  // HTTP request logging middlewear.
const logger = require('./logger');
const db  = require('./db/knex');

const routes = require('./routes');

const app = express();
const port =  process.env.PORT || 5000;

// log the requests with statusCode < 400 to the stdout
app.use(morgan('dev', {
    stream: process.stderr,
    skip: (req, res) => {
        return res.statusCode < 400
    }
}));

// requests with statusCode >= 400 to the stderr
app.use(morgan('dev', {
    stream: process.stdout,
    skip: (req, res) => {
        return res.statusCode >= 400
    }
}));

app.use(helmet())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// API calls
app.use('/api', routes);


if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, './build')));

    // Handle React routing, return all requests to React app
    // app.get('*', function(req, res) {
    //     res.sendFile(path.join(__dirname, './build', 'index.html'));
    // });
}

app.listen(port, () => logger.info('App listening on port %d', port));
