'use strict';
const express = require('express'),
      router  = express.Router();

// ROUTERS
const redirectRouter = require('./redirects'),
      sfbaRouter = require('./sfba'),
      music2021Router = require('./2021'),
      songRouter = require('./songs');

// index routes
router.get('/', (req, res) => {
    res.set('Link', '<https://tylerlevs.com>; rel="canonical"');
    res.render('index', { id: 'main', title: "Tyler Levs Music", scriptIds: ['main'] });
});

// BDAY TEMPORARY

router.get('/happy-birthday', (req, res) => {
    res.set('Link', '<https://tylerlevs.com>; rel="canonical"');
    res.render('bday', { id: 'main', title: "Happy Birthday Tyler!", scriptIds: ['main'] });
});

// HIT ME LIKE A DREAM PROMO ROUTES

router.get('/hit-me-like-a-dream', (req, res) => {
    fetch('https://www.google-analytics.com/mp/collect?measurement_id='+process.env.TLM_G_MEASUREMENT_ID+'&api_secret='+process.env.TLM_G_API_SECRET, {
            method: "POST",
            body: JSON.stringify({
            "client_id": "252990832",
            "events": [{
                "name": "open_hmlad"
            }]
        })
    });
    res.render('hmlad', { id: 'sub', title: 'Tyler Levs Music - Hit Me Like A Dream', scriptIds: ['main', 'hmlad'] });
});

router.get('/hitmelikeadream', (req, res) => {
    res.redirect('/hit-me-like-a-dream');
});

router.get('/hmlad', (req, res) => {
    res.redirect('/hit-me-like-a-dream');
});

// LET'S BEGIN PROMO ROUTE

router.get('/lets-begin', (req, res) => {
    fetch('https://www.google-analytics.com/mp/collect?measurement_id='+process.env.TLM_G_MEASUREMENT_ID+'&api_secret='+process.env.TLM_G_API_SECRET, {
        method: "POST",
        body: JSON.stringify({
        "client_id": "252990832",
        "events": [{
            "name": "open_lets_begin"
        }]
    })
});
res.render('letsbegin', { id: 'sub', title: 'Tyler Levs Music - TLM & Joliet4 - Let\'s Begin', scriptIds: ['main', 'letsbegin'] });
});

// PRESS RELEASES
router.get('/press', (req, res) => {
    fetch('https://www.google-analytics.com/mp/collect?measurement_id='+process.env.TLM_G_MEASUREMENT_ID+'&api_secret='+process.env.TLM_G_API_SECRET, {
            method: "POST",
            body: JSON.stringify({
            "client_id": "252990832",
            "events": [{
                "name": "open_press"
            }]
        })
    });
    res.render('press', { id: 'press', title: 'Tyler Levs Music - Press Kit', scriptIds: ['main', 'press'] });
});


// IMPORTING ROUTERS

    // REDIRECTS
    router.use(redirectRouter);

    // SFBA ROUTES
    router.use(sfbaRouter);

    // SONG ROUTES
    router.use(songRouter);

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