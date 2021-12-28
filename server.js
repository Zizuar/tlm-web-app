'use strict';

const createError = require('http-errors');
const mongoose    = require('mongoose');
const express = require('express');
const logger = require('morgan');
const path = require('path');

// Constants
const PORT = process.env.TLM_PORT || 3000;

// App
const app = express();

// Load DotEnv config
require('dotenv').config();

// DATABASE CONNECTION

mongoose.connect(process.env.TLM_DB_URL).
catch(error => function(err) {
  console.log(err.reason);
});
mongoose.connection.once('open', function() {
  console.log('DB connected');
});

// App config
app.use(logger(':method :url :status :res[content-length] - :response-time ms --- :date[web]'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// API routes
const apiRouter = require('./api/v1/api');
app.use('/api/v1', apiRouter);

// legacy routes
const presaveRouter = require('./api/legacy/legacy-routes/presave.routes');
app.use(presaveRouter);
const redirectRouter = require('./api/legacy/legacy-routes/redirect.routes');
app.use(redirectRouter);

// serve dist folder as static
app.use(express.static(path.join(__dirname, '/dist/tlm-web-app/')));

// CATCHALL ROUTES

app.get('*', (req, res) => {
  res.redirect('/');
});

app.post('*', function (req, res) {
  res.status(403).end();
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // send the error
  res.status(err.status || 500);
  res.send(err);
});

// Start server
app.listen(PORT);
console.log(`TLM Server running on port ${PORT}`);
