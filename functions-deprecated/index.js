const functions = require("firebase-functions");

'use strict';

const mongoose = require('mongoose');
const express = require('express');

// App
const app = express();

// App config
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// DATABASE CONNECTION
const TLM_DB_URL = functions.config().config.database_url;
mongoose.connect(TLM_DB_URL).
catch(error => function(err) {
  functions.logger.log(err.reason);
});
mongoose.connection.once('open', function() {
  functions.logger.log('DB connected');
});

const apiRouter = require('./api/v1/api');
app.use('/api/v1', apiRouter);

const presaveRouter = require('./api/legacy/legacy-routes/presave.routes');
app.use('/presave', presaveRouter);

exports.main = functions.https.onRequest(app);
