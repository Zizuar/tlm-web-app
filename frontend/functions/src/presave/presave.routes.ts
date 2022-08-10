import * as express from 'express';

const presaveRouter = express.Router();

// Presave redirects

presaveRouter.get('/:title', (req, res) => {
  if (req.params.title === 'hit-me-like-a-dream') {
    res.redirect(
      'https://distrokid.com/hyperfollow/tylerlevs/hit-me-like-a-dream',
    );
  } else if (req.params.title === 'reset') {
    res.redirect('https://distrokid.com/hyperfollow/tylerlevs/reset');
  } else if (req.params.title === 'love-harvest') {
    res.redirect('https://distrokid.com/hyperfollow/tylerlevs/love-harvest');
  } else if (req.params.title === 'throw-me-feelings') {
    res.redirect(
      'https://distrokid.com/hyperfollow/tylerlevs/throw-me-feelings',
    );
  } else if (req.params.title === 'emergency') {
    res.redirect('https://distrokid.com/hyperfollow/tylerlevs/emergency-2');
  } else if (req.params.title === 'parallel-universe') {
    res.redirect(
      'https://distrokid.com/hyperfollow/tylerlevs/parallel-universe',
    );
  } else if (req.params.title === 'through-the-valley') {
    res.redirect(
      'https://distrokid.com/hyperfollow/tylerlevs/through-the-valley',
    );
  } else if (req.params.title === 'lets-begin') {
    res.redirect(
      'https://distrokid.com/hyperfollow/tylerlevsandjoliet4/lets-begin',
    );
  } else if (req.params.title === 'worry-bout-that') {
    res.redirect(
      'https://distrokid.com/hyperfollow/tylerlevs/worry-bout-that-in-the-morning',
    );
  } else if (req.params.title === 'struck') {
    res.redirect('https://distrokid.com/hyperfollow/tylerlevs/struck');
  } else if (req.params.title === 'struck-ep') {
    res.redirect('https://distrokid.com/hyperfollow/tylerlevs/struck-the-ep');
  } else if (req.params.title === 'sad-thoughts') {
    res.redirect('https://distrokid.com/hyperfollow/tylerlevs/sad-thoughts-2');
  } else {
    res.redirect('/');
  }
});

export default presaveRouter;
