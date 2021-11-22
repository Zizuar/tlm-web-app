'use strict';
const express = require('express'),
      router = express.Router();


// Presave redirects

router.get('/presave/:title', (req, res) => {
    if (req.params.title == 'hit-me-like-a-dream') {
        fetch('https://www.google-analytics.com/mp/collect?measurement_id='+process.env.TLM_G_MEASUREMENT_ID+'&api_secret='+process.env.TLM_G_API_SECRET, {
            method: "POST",
            body: JSON.stringify({
                "client_id": "252990832",
                "events": [{
                    "name": "presave_hit_me_like_a_dream"
                }]
            })
        });
        res.redirect('https://distrokid.com/hyperfollow/tylerlevs/hit-me-like-a-dream');
    } else if (req.params.title == 'throw-me-feelings') {
        fetch('https://www.google-analytics.com/mp/collect?measurement_id='+process.env.TLM_G_MEASUREMENT_ID+'&api_secret='+process.env.TLM_G_API_SECRET, {
            method: "POST",
            body: JSON.stringify({
                "client_id": "252990832",
                "events": [{
                    "name": "presave_throwmefeelings"
                }]
            })
        });
        res.redirect('https://distrokid.com/hyperfollow/tylerlevs/throw-me-feelings');
    } else if (req.params.title == 'emergency') {
        fetch('https://www.google-analytics.com/mp/collect?measurement_id='+process.env.TLM_G_MEASUREMENT_ID+'&api_secret='+process.env.TLM_G_API_SECRET, {
            method: "POST",
            body: JSON.stringify({
                "client_id": "252990832",
                "events": [{
                    "name": "presave_emergency"
                }]
            })
        });
        res.redirect('https://distrokid.com/hyperfollow/tylerlevs/emergency-2');
    } else if (req.params.title == 'parallel-universe') {
        fetch('https://www.google-analytics.com/mp/collect?measurement_id='+process.env.TLM_G_MEASUREMENT_ID+'&api_secret='+process.env.TLM_G_API_SECRET, {
            method: "POST",
            body: JSON.stringify({
                "client_id": "252990832",
                "events": [{
                    "name": "presave_parallel_universe"
                }]
            })
        });
        res.redirect('https://distrokid.com/hyperfollow/tylerlevs/parallel-universe');
    } else if (req.params.title == 'through-the-valley') {
        fetch('https://www.google-analytics.com/mp/collect?measurement_id='+process.env.TLM_G_MEASUREMENT_ID+'&api_secret='+process.env.TLM_G_API_SECRET, {
            method: "POST",
            body: JSON.stringify({
                "client_id": "252990832",
                "events": [{
                    "name": "presave_through_the_valley"
                }]
            })
        });
        res.redirect('https://distrokid.com/hyperfollow/tylerlevs/through-the-valley');
    } else if (req.params.title == 'lets-begin') {
        fetch('https://www.google-analytics.com/mp/collect?measurement_id='+process.env.TLM_G_MEASUREMENT_ID+'&api_secret='+process.env.TLM_G_API_SECRET, {
            method: "POST",
            body: JSON.stringify({
                "client_id": "252990832",
                "events": [{
                    "name": "presave_lets_begin"
                }]
            })
        });
        res.redirect('https://distrokid.com/hyperfollow/tylerlevsandjoliet4/lets-begin');
    } else {
        res.redirect('/2021')
    }
});

// HIT ME LIKE A DREAM PROMO ROUTES

router.get('/hit-me-like-a-dream', (req, res) => {
    res.redirect('/song/hit-me-like-a-dream');
});

router.get('/hitmelikeadream', (req, res) => {
    res.redirect('/song/hit-me-like-a-dream');
});

router.get('/hmlad', (req, res) => {
    res.redirect('/song/hit-me-like-a-dream');
});

// THROUGH THE VALLEY PROMO REDIRECTS

router.get('/through-the-valley', (req, res) => {
    res.redirect('/song/through-the-valley')
});

router.get('/throughthevalley', (req, res) => {
    res.redirect('/song/through-the-valley');
});

// LET'S BEGIN PROMO ROUTE

router.get('/lets-begin', (req, res) => {
    res.redirect('/song/lets-begin')
});

// SFBA PROMO ROUTER

router.get('/sfba', (req, res) => {
    res.redirect('/albums/sfba')
});

// About page

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

// Streamersonglist

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

// Streamelements tip

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

// Merch shop

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

// Twitch info

router.get('/schedule', (req, res) => {
    res.redirect('/#twitch');
});

router.get('/contact', (req, res) => {
    res.redirect('/#contact');
});

router.get('/events', (req, res) => {
    res.redirect('/#events');
});

// Spotify redirect

router.get('/spotify', (req, res) => {
    res.redirect('https://open.spotify.com/artist/5NUqe9c7M8oSBiHns5L6SE');
});

module.exports = router;