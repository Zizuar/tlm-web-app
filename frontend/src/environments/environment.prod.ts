import { Environment } from '../app/core/models/environment';

export const environment: Environment = {
  production: true,
  baseUrl: 'https://tylerlevs.com',
  recaptcha: {
    sitekey: '0x4AAAAAAAc3y2pkAgMlYpQ-',
  },
  apiBaseUrl: 'https://api.tylerlevs.com',
  coversAssetUrl: 'https://covers.tylerlevs.com',
  metadata: [
    {
      name: 'description',
      content:
        'Tyler Levs is a singer-songwriter from Maine USA. He is a full-time music streamer, Twitch Partner and collaborates on original music and cover performances.',
    },
    {
      name: 'keywords',
      content:
        'Tyler Levs, TylerLevsMusic, TylerLevs, Tyler Levs Music, Singer, Songwriter, Twitch, Streamer, Indie, Music, Musician, Loopstation',
    },
    {
      name: 'author',
      content: 'Gabor Meszaros <https://github.com/MikeSierra88>',
    },
  ],
};
