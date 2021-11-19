'use strict';

const createError = require('http-errors'),
      mongoose    = require('mongoose'),
      express     = require('express'),
      logger      = require('morgan'),
      path        = require('path'),
      router      = require('./routes/routes');

// Constants
const PORT = process.env.TLM_PORT || 3000;

// App
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger(':method :url :status :res[content-length] - :response-time ms --- :date[web]'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// DATABASE CONNECTION

const DB_URI = process.env.TLM_DB_URI || 'mongodb://localhost:27017/tlm-dev?readPreference=primary&ssl=false';

mongoose.connect(DB_URI).
catch(error => function(err) {
    console.log(err.reason);
});

const db = mongoose.connection;
db.once('open', function() {
    console.log('DB connected');
});

// ROUTES
app.use('/', router);

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
  var error = err;
  res.render("error.ejs", {error: error});
});

// Start server
app.listen(PORT);
console.log(`TLM Server running on port ${PORT}`);