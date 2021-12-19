const express = require('express');
const router = new express.Router();

const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

// API setup
const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.3',
    info: {
      title: 'TLM API',
      version: '1.0.0',
      servers: [
        {
          url: 'http://localhost:3000/api/v1',
          description: 'Development server',
        },
        {
          url: 'https://tylerlevs.com/api/v1',
          description: 'Production server',
        },
      ],
    },
  },
  apis: ['**/*.routes.js'],
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);
router.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

router.use(require('./routes/releases.routes'));
router.use(require('./routes/pressReleases.routes'));
router.use(require('./routes/events.routes'));
router.use(require('./routes/orders.routes'));

module.exports = router;
