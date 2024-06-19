// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { Environment } from '../app/core/models/environment';

export const environment: Environment = {
  production: false,
  baseUrl: 'http://localhost:4200',
  recaptcha: {
    sitekey: '3x00000000000000000000FF',
  },
  apiBaseUrl: 'http://localhost:3000',
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
