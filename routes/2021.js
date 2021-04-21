'use strict';
const express    = require('express'),
      router     = express.Router();

router.get('/2021', (req, res) => {
    res.render('2021', { id: 'sub', title: 'Tyler Levs Music - Song releases in 2021', scriptIds: ['main', '2021'] });
});
  
// Alternative links

router.get('/soon', (req, res) => {
    res.redirect('/2021')
});

module.exports = router;