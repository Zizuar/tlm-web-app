import * as express from 'express';
import { fetch } from 'node-fetch';
const presaveRouter = express.Router();
import { CONFIG } from '../config';

const TLM_G_MEASUREMENT_ID = CONFIG.google_measurement_id || '';
const TLM_G_API_SECRET = CONFIG.google_api_secret || '';

// Presave redirects

presaveRouter.get('/:title', (req, res) => {
  if (req.params.title === 'hit-me-like-a-dream') {
    fetch(
      'https://www.google-analytics.com/mp/collect?measurement_id=' +
        TLM_G_MEASUREMENT_ID +
        '&api_secret=' +
        TLM_G_API_SECRET,
      {
        method: 'POST',
        body: JSON.stringify({
          client_id: '252990832',
          events: [
            {
              name: 'presave_hit_me_like_a_dream',
            },
          ],
        }),
      },
    );
    res.redirect(
      'https://distrokid.com/hyperfollow/tylerlevs/hit-me-like-a-dream',
    );
  } else if (req.params.title === 'throw-me-feelings') {
    fetch(
      'https://www.google-analytics.com/mp/collect?measurement_id=' +
        TLM_G_MEASUREMENT_ID +
        '&api_secret=' +
        TLM_G_API_SECRET,
      {
        method: 'POST',
        body: JSON.stringify({
          client_id: '252990832',
          events: [
            {
              name: 'presave_throwmefeelings',
            },
          ],
        }),
      },
    );
    res.redirect(
      'https://distrokid.com/hyperfollow/tylerlevs/throw-me-feelings',
    );
  } else if (req.params.title === 'emergency') {
    fetch(
      'https://www.google-analytics.com/mp/collect?measurement_id=' +
        TLM_G_MEASUREMENT_ID +
        '&api_secret=' +
        TLM_G_API_SECRET,
      {
        method: 'POST',
        body: JSON.stringify({
          client_id: '252990832',
          events: [
            {
              name: 'presave_emergency',
            },
          ],
        }),
      },
    );
    res.redirect('https://distrokid.com/hyperfollow/tylerlevs/emergency-2');
  } else if (req.params.title === 'parallel-universe') {
    fetch(
      'https://www.google-analytics.com/mp/collect?measurement_id=' +
        TLM_G_MEASUREMENT_ID +
        '&api_secret=' +
        TLM_G_API_SECRET,
      {
        method: 'POST',
        body: JSON.stringify({
          client_id: '252990832',
          events: [
            {
              name: 'presave_parallel_universe',
            },
          ],
        }),
      },
    );
    res.redirect(
      'https://distrokid.com/hyperfollow/tylerlevs/parallel-universe',
    );
  } else if (req.params.title === 'through-the-valley') {
    fetch(
      'https://www.google-analytics.com/mp/collect?measurement_id=' +
        TLM_G_MEASUREMENT_ID +
        '&api_secret=' +
        TLM_G_API_SECRET,
      {
        method: 'POST',
        body: JSON.stringify({
          client_id: '252990832',
          events: [
            {
              name: 'presave_through_the_valley',
            },
          ],
        }),
      },
    );
    res.redirect(
      'https://distrokid.com/hyperfollow/tylerlevs/through-the-valley',
    );
  } else if (req.params.title === 'lets-begin') {
    fetch(
      'https://www.google-analytics.com/mp/collect?measurement_id=' +
        TLM_G_MEASUREMENT_ID +
        '&api_secret=' +
        TLM_G_API_SECRET,
      {
        method: 'POST',
        body: JSON.stringify({
          client_id: '252990832',
          events: [
            {
              name: 'presave_lets_begin',
            },
          ],
        }),
      },
    );
    res.redirect(
      'https://distrokid.com/hyperfollow/tylerlevsandjoliet4/lets-begin',
    );
  } else if (req.params.title === 'worry-bout-that') {
    fetch(
      'https://www.google-analytics.com/mp/collect?measurement_id=' +
        TLM_G_MEASUREMENT_ID +
        '&api_secret=' +
        TLM_G_API_SECRET,
      {
        method: 'POST',
        body: JSON.stringify({
          client_id: '252990832',
          events: [
            {
              name: 'presave_worry_bout_that',
            },
          ],
        }),
      },
    );
    res.redirect(
      'https://distrokid.com/hyperfollow/tylerlevs/worry-bout-that-in-the-morning',
    );
  } else if (req.params.title === 'struck') {
    fetch(
      'https://www.google-analytics.com/mp/collect?measurement_id=' +
        TLM_G_MEASUREMENT_ID +
        '&api_secret=' +
        TLM_G_API_SECRET,
      {
        method: 'POST',
        body: JSON.stringify({
          client_id: '252990832',
          events: [
            {
              name: 'presave_struck_single',
            },
          ],
        }),
      },
    );
    res.redirect('https://distrokid.com/hyperfollow/tylerlevs/struck');
  } else if (req.params.title === 'struck-ep') {
    fetch(
      'https://www.google-analytics.com/mp/collect?measurement_id=' +
        TLM_G_MEASUREMENT_ID +
        '&api_secret=' +
        TLM_G_API_SECRET,
      {
        method: 'POST',
        body: JSON.stringify({
          client_id: '252990832',
          events: [
            {
              name: 'presave_struck_ep',
            },
          ],
        }),
      },
    );
    res.redirect('https://distrokid.com/hyperfollow/tylerlevs/struck-the-ep');
  } else {
    res.redirect('/');
  }
});

export default presaveRouter;
