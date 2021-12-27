const express = require('express');
const router = new express.Router();
const middleware = require('../middleware/orders.middleware');

/**
 * @swagger
 * tags:
 *  - name: Orders
 */

/**
 * @swagger
 * /api/v1/orders:
 *  get:
 *    description: Get all orders
 *    tags: [Orders]
 *    responses:
 *      501:
 *        description: Not implemented
 */
router.get('/orders', (req, res) => {
  res.status(501).send();
});

/**
 * @swagger
 * /api/v1/orders:
 *  post:
 *    description: Create new order
 *    tags: [Orders]
 *    produces: application/json
 *    responses:
 *      201:
 *        description: Order created
 *      400:
 *        description: Invalid request
 */
router.post('/orders', middleware.captchaPassed, (req, res) => {
  console.log('Saving new order...', req.body);
  res.status(201).json({success: true});
});

module.exports = router;
