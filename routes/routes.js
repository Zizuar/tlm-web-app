'use strict';
const express = require('express'),
      router  = express.Router();

// ROUTERS
const redirectRouter = require('./redirects'),
      sfbaRouter = require('./sfba'),
      music2021Router = require('./2021');

// index routes
router.get('/', (req, res) => {
    res.set('Link', '<https://tylerlevs.com>; rel="canonical"');
    res.render('index', { id: 'main', title: "Tyler Levs Music", scriptIds: ['main'] });
});


// IMPORTING ROUTERS

    // REDIRECTS
    router.use(redirectRouter);

    // SFBA ROUTES
    router.use(sfbaRouter);

    // 2021 ROUTES
    router.use(music2021Router);

// CATCHALL ROUTES

router.get('*', (req, res) => {
    res.redirect('/');
});

router.post('*', function(req, res){
    res.status(403).end();
 });

module.exports = router;