const express = require('express');
const router = express.Router();


// UPCOMING RELEASES PROMO ROUTE

router.get('/soon', (req, res) => {
  res.redirect('/#upcoming-releases');
});

// 2021 PROMO ROUTE

router.get('/2021', (req, res) => {
  res.redirect('/collections/2021');
});

// HIT ME LIKE A DREAM PROMO ROUTES

router.get('/hit-me-like-a-dream', (req, res) => {
  res.redirect('/songs/hit-me-like-a-dream');
});

router.get('/hitmelikeadream', (req, res) => {
  res.redirect('/songs/hit-me-like-a-dream');
});

router.get('/hmlad', (req, res) => {
  res.redirect('/songs/hit-me-like-a-dream');
});

// THROUGH THE VALLEY PROMO REDIRECTS

router.get('/through-the-valley', (req, res) => {
  res.redirect('/songs/through-the-valley')
});

router.get('/throughthevalley', (req, res) => {
  res.redirect('/songs/through-the-valley');
});

// LET'S BEGIN PROMO ROUTE

router.get('/lets-begin', (req, res) => {
  res.redirect('/songs/lets-begin')
});

// SFBA PROMO ROUTER

router.get('/sfba', (req, res) => {
  res.redirect('/albums/songs-for-being-alone')
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

module.exports = router;
