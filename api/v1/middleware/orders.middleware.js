'use strict';
const {check, validationResult} = require('express-validator'),
  fetch = require('isomorphic-fetch');

const middlewareObj = {};

middlewareObj.captchaPassed = function(req, res, next) {
  if (req.body.captcha === undefined ||
    req.body.captcha === '' ||
    req.body.captcha === null) {

    return res.status(401).json({
      success: false,
      type: 'captcha',
      message: 'Captcha error: no captcha response in submitted form.',
    });
  }
  // process.env.TLM_RECAPTCHA_SECRET
  const verificationURL = 'https://www.google.com/recaptcha/api/siteverify?secret=' + process.env.TLM_G_RECAPTCHA_SECRET + '&response=' + req.body['captcha'];
  fetch(verificationURL, {method: 'post'})
    .then(response => response.json())
    .then(google_response => {
      if (google_response.success) {
        next();
      } else {
        res.status(401).json({
          success: false,
          type: 'captcha',
          message: 'Captcha error',
        });
      }
    })
    .catch(error => {
      res.status(401).json({
        success: false,
        type: 'captcha',
        message: 'Captcha error',
      });
    });
};

middlewareObj.validateOrder = async (req, res, next) => {
  await check('email').isEmail().normalizeEmail().run(req);
  await check('name').not().isEmpty().trim().escape().run(req);
  await check('street1').not().isEmpty().trim().escape().run(req);
  await check('street2').trim().escape().run(req);
  await check('city').not().isEmpty().trim().escape().run(req);
  await check('state').trim().escape().run(req);
  await check('zip').not().isEmpty().trim().escape().run(req);
  await check('country').not().isEmpty().trim().escape().run(req);
  await check('other').trim().escape().run(req);

  const result = validationResult(req);
  if (!result.isEmpty()) {
    let errorMessage = 'Validation error: ';
    result.errors.forEach((e) => {
      errorMessage = errorMessage + e.msg;
    });
    return res.status(422).json({
      success: false,
      type: 'validation',
      message: errorMessage,
    });
  }
  next();
};

module.exports = middlewareObj;
