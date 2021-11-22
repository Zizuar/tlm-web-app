const express     = require('express'),
      router      = express.Router(),
      collectionJson    = require('../data/collections.json');

router.get('/collections/:title', (req, res) => {
  const collection = collectionJson[req.params.title];
  if (!collection) { return res.redirect('/'); }
  fetch('https://www.google-analytics.com/mp/collect?measurement_id='+process.env.TLM_G_MEASUREMENT_ID+'&api_secret='+process.env.TLM_G_API_SECRET, {
            method: "POST",
            body: JSON.stringify({
            "client_id": "252990832",
            "events": [{
                "name": `open_collection_info_${req.params.title}`
            }]
        })
    });
  res.render('collection-info', {
    id: 'sub',
    title: 'Tyler Levs Music - ' + collection.title,
    scriptIds: ['main', 'song'],
    collection
  })
});

module.exports = router;