'use strict';
const express = require('express'),
      router = express.Router();


router.get('/about', (req, res) => {
    fetch('https://www.google-analytics.com/mp/collect?measurement_id='+process.env.TLM_G_MEASUREMENT_ID+'&api_secret='+process.env.TLM_G_API_SECRET, {
            method: "POST",
            body: JSON.stringify({
            "client_id": "252990832",
            "events": [{
                "name": "open_about"
            }]
        })
    });

    res.redirect('/#about');
});

router.get('/aboutme', (req, res) => {
    res.redirect('/about');
});

router.get('/songlist', (req, res) => {
    fetch('https://www.google-analytics.com/mp/collect?measurement_id='+process.env.TLM_G_MEASUREMENT_ID+'&api_secret='+process.env.TLM_G_API_SECRET, {
        method: "POST",
        body: JSON.stringify({
            "client_id": "252990832",
            "events": [{
                "name": "open_songlist"
            }]
        })
    });
    res.redirect('https://www.streamersonglist.com/t/tylerlevsmusic/songs');
});

router.get('/queue', (req, res) => {
    fetch('https://www.google-analytics.com/mp/collect?measurement_id='+process.env.TLM_G_MEASUREMENT_ID+'&api_secret='+process.env.TLM_G_API_SECRET, {
        method: "POST",
        body: JSON.stringify({
            "client_id": "252990832",
            "events": [{
                "name": "open_queue"
            }]
        })
    });
    res.redirect('https://www.streamersonglist.com/t/tylerlevsmusic/queue');
});

router.get('/tip', (req, res) => {
    fetch('https://www.google-analytics.com/mp/collect?measurement_id='+process.env.TLM_G_MEASUREMENT_ID+'&api_secret='+process.env.TLM_G_API_SECRET, {
        method: "POST",
        body: JSON.stringify({
            "client_id": "252990832",
            "events": [{
                "name": "open_tip"
            }]
        })
    });
    res.redirect('https://streamlabs.com/tylerlevsmusic/tip');
});

router.get('/merch', (req, res) => {
    res.redirect('/shop');
});

router.get('/shop', (req, res) => {
    fetch('https://www.google-analytics.com/mp/collect?measurement_id='+process.env.TLM_G_MEASUREMENT_ID+'&api_secret='+process.env.TLM_G_API_SECRET, {
            method: "POST",
            body: JSON.stringify({
            "client_id": "252990832",
            "events": [{
                "name": "open_shop"
            }]
        })
    });
    res.redirect('https://teespring.com/stores/tylerlevsmusic');
});

router.get('/schedule', (req, res) => {
    res.redirect('/#twitch');
});

router.get('/contact', (req, res) => {
    res.redirect('/#contact');
});

router.get('/spotify', (req, res) => {
    res.redirect('https://open.spotify.com/artist/5NUqe9c7M8oSBiHns5L6SE');
});

module.exports = router;