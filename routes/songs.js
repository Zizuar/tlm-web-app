

const express     = require('express'),
      router      = express.Router(),
      songJson    = require('../data/songs.json');

router.get('/song/:title', (req, res) => {
  const song = songJson[req.params.title];
  if (!song) { res.redirect('/'); }
  fetch('https://www.google-analytics.com/mp/collect?measurement_id='+process.env.TLM_G_MEASUREMENT_ID+'&api_secret='+process.env.TLM_G_API_SECRET, {
            method: "POST",
            body: JSON.stringify({
            "client_id": "252990832",
            "events": [{
                "name": "open_song_info"
            }]
        })
    });
  res.render('song-info', {
    id: 'sub',
    title: 'Tyler Levs Music - ' + song.title,
    scriptIds: ['main', 'song'],
    song
  })
});

module.exports = router;