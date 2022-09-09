import * as express from 'express';

const presaveRouter = express.Router();

// Presave redirects

presaveRouter.get('/:title', (req, res) => {
  const presaves = req.app.locals.presaves;
  if (!presaves) {
    res.redirect('https://tylerlevs.com');
  } else {
    const url = presaves[req.params.title];
    res.redirect(url ? url : 'https://tylerlevs.com');
  }
});

export default presaveRouter;
