'use strict';
const express = require('express');
const app = express();
const functions = require('firebase-functions');

// Constants
const PORT = 3001;

// legacy routes
const presaveRouter = require('./api/legacy/legacy-routes/presave.routes');
const createError = require('http-errors');
app.use(presaveRouter);

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

exports.presave = functions.https.onRequest(app);
