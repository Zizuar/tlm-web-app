'use strict';
const express    = require('express'),
      router     = express.Router();

router.get('/2021', (req, res) => {
    res.redirect('/collections/2021');
});



  
// Alternative links

router.get('/soon', (req, res) => {
    res.redirect('/collections/2021');
});

module.exports = router;