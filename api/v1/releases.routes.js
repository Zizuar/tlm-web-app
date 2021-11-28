const express = require('express');
const router = new express.Router();

const releases = [
  {
    title: 'Hit Me Like A Dream'
  },
  {
    title: 'Let\'s Begin'
  }
];

/**
 * @swagger
 * tags:
 *  - name: Releases
 *    description: Songs, albums, collections or future releases
 */

/**
 * @swagger
 * /api/v1/releases:
 *  get:
 *    description: Get all Release
 *    tags: [Releases]
 *    produces: application/json
 *    responses:
 *      200:
 *        description: Success
 */
router.get('/releases', (req, res) => {
  res.status(200).send(releases);
});

module.exports = router;
