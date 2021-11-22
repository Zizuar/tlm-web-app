'use strict';
const express    = require('express'),
      mongoose   = require('mongoose'),
      middleware = require('../middleware'),
      fetch      = require('isomorphic-fetch'),
      Order      = require('../models/order'),
      router     = express.Router();

// CD order routes

router.get('/order', (req, res) => {
    res.render('order', {id: 'sub', title: 'Tyler Levs Music - Order Signed CDs', scriptIds: ['main', 'sfba', 'order'] });
});
// 
router.post('/order', 
    middleware.captchaPassed,
    middleware.validateOrder,
    async (req, res) => {
        const session = await mongoose.startSession();
        session.startTransaction();
        const newOrder = new Order({
            email: req.body.email,
            mailName: req.body.mailName,
            street1: req.body.street1,
            street2: req.body.street2,
            city: req.body.city,
            state: req.body.state,
            zip: req.body.zip,
            country: req.body.country,
            wantsEP: req.body.wantsEP,
            wantsSignature: req.body.wantsSignature,
            signatureName: req.body.signatureName,
            otherRequests: req.body.otherRequests
        });
        return newOrder.save()
        .then(async () => {
            await session.commitTransaction();
            session.endSession();
            console.log('New order added!')
            res.status(200).json({
                success: true
            });
        })
        .catch(async (error) => {
            await session.abortTransaction();
            session.endSession();
            res.status(400).json({
                success: false,
                type: "database",
                message: error.toString()
            });
        });
  });

module.exports = router;