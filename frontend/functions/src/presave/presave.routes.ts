import * as express from 'express';

const presaveRouter = express.Router();

// Presave redirects

presaveRouter.get('/:title', (req, res) => {
  switch (req.params.title) {
    case 'hit-me-like-a-dream':
      res.redirect('https://distrokid.com/hyperfollow/tylerlevs/hit-me-like-a-dream');
      break;
    case 'reset':
      res.redirect('https://distrokid.com/hyperfollow/tylerlevs/reset');
      break;
    case 'love-harvest':
      res.redirect('https://distrokid.com/hyperfollow/tylerlevs/love-harvest');
      break;
    case 'let-me-go-nostalgia-sucks':
      res.redirect('https://distrokid.com/hyperfollow/tylerlevs/let-me-go-nostalgia-sucks');
      break;
    case 'yes-no-maybe':
      res.redirect('https://distrokid.com/hyperfollow/tylerlevs/yes-no-maybe-2');
      break;
    case 'never-look-back':
      res.redirect('https://distrokid.com/hyperfollow/tylerlevs/never-look-back');
      break;
    case 'baggage':
      res.redirect('https://distrokid.com/hyperfollow/tylerlevs/baggage');
      break;
    case 'gratitude':
      res.redirect('https://distrokid.com/hyperfollow/tylerlevs/gratitude');
      break;
    case 'throw-me-feelings':
      res.redirect('https://distrokid.com/hyperfollow/tylerlevs/throw-me-feelings');
      break;
    case 'emergency':
      res.redirect('https://distrokid.com/hyperfollow/tylerlevs/emergency-2');
      break;
    case 'parallel-universe':
      res.redirect('https://distrokid.com/hyperfollow/tylerlevs/parallel-universe');
      break;
    case 'through-the-valley':
      res.redirect('https://distrokid.com/hyperfollow/tylerlevs/through-the-valley');
      break;
    case 'lets-begin':
      res.redirect('https://distrokid.com/hyperfollow/tylerlevsandjoliet4/lets-begin');
      break;
    case 'worry-bout-that':
      res.redirect('https://distrokid.com/hyperfollow/tylerlevs/worry-bout-that-in-the-morning');
      break;
    case 'struck':
      res.redirect('https://distrokid.com/hyperfollow/tylerlevs/struck');
      break;
    case 'struck-ep':
      res.redirect('https://distrokid.com/hyperfollow/tylerlevs/struck-the-ep');
      break;
    case 'sad-thoughts':
      res.redirect('https://distrokid.com/hyperfollow/tylerlevs/sad-thoughts-2');
      break;
    default:
      res.redirect('/');
  }
});

export default presaveRouter;
