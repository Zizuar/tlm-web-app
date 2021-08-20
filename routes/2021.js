'use strict';
const express    = require('express'),
      router     = express.Router();

router.get('/2021', (req, res) => {
    fetch('https://www.google-analytics.com/mp/collect?measurement_id='+process.env.TLM_G_MEASUREMENT_ID+'&api_secret='+process.env.TLM_G_API_SECRET, {
        method: "POST",
        body: JSON.stringify({
            "client_id": "252990832",
            "events": [{
                "name": "open_2021"
            }]
        })
    });
    res.render('2021', { id: 'sub', title: 'Tyler Levs Music - Song releases in 2021', scriptIds: ['main', '2021'] });
});



  
// Alternative links

router.get('/soon', (req, res) => {
    res.redirect('/2021')
});

module.exports = router;