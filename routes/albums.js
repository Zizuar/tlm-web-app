const express     = require('express'),
      router      = express.Router(),
      albumJson    = require('../data/albums.json');

router.get('/albums/:title', (req, res) => {
  const album = albumJson[req.params.title];
  if (!album) { return res.redirect('/'); }
  fetch('https://www.google-analytics.com/mp/collect?measurement_id='+process.env.TLM_G_MEASUREMENT_ID+'&api_secret='+process.env.TLM_G_API_SECRET, {
            method: "POST",
            body: JSON.stringify({
            "client_id": "252990832",
            "events": [{
                "name": `open_album_info_${req.params.title}`
            }]
        })
    });
  res.render('album-info', {
    id: 'sub',
    title: 'Tyler Levs Music - ' + album.title,
    scriptIds: ['main', 'song'],
    album
  })
});

module.exports = router;