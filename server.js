'use strict';

const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');
const path = require('path');

// Constants
const PORT = process.env.TLM_PORT || 3000;

// App
const app = express();

app.use(logger(':method :url :status :res[content-length] - :response-time ms --- :date[web]'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, '/dist/tlm-web-app/')));

const apiRouter = require('./api/v1/api');
app.use('/api/v1', apiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err);
});

// Start server
app.listen(PORT);
console.log(`TLM Server running on port ${PORT}`);
