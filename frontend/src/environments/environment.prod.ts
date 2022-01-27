import { Environment } from "../app/core/models/environment";

export const environment: Environment = {
  production: true,
  baseUrl: 'https://tylerlevs.com',
  recaptcha: {
    sitekey: '6Ley8FwaAAAAAKrEXqlKLPkKivxIkfVN6VnnoHP7'
  },
  apiBaseUrl: 'https://tlm-api.herokuapp.com',
  metadata: [
    {name: 'description', content: 'Tyler Levs is a singer-songwriter from Maine USA. He is a full-time music streamer, Twitch Partner and collaborates on original music and cover performances.'},
    {name: 'keywords', content: 'Tyler Levs, TylerLevsMusic, TylerLevs, Tyler Levs Music, Singer, Songwriter, Twitch, Streamer, Indie, Music, Musician, Loopstation'},
    {name: 'author', content: 'Gabor Meszaros <https://github.com/MikeSierra88>'}
  ],
  auth: {
    clientId: 'QI6OizFa5JpBocC82KG2DXSX9VkSev9Y',
    domain: 'tlm-auth.us.auth0.com',
    audience: 'https://api.tylerlevs.com',
    httpInterceptor: {
      allowedList: [
        {
          uri: 'https://tlm-api.herokuapp.com/v1/*',
          allowAnonymous: true
        }
      ]
    },
  }
};
