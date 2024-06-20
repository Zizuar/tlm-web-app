// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { Environment } from '../app/core/models/environment';

export const environment: Environment = {
  production: false,
  baseUrl: 'http://localhost:4201',
  apiBaseUrl: 'http://localhost:3000',
  auth: {
    clientId: 'pTkbwjYx6vpV8qzhO7lioKupoSa5IbUP',
    domain: 'tlm-auth-dev.us.auth0.com',
    authorizationParams: {
      audience: 'https://api-test'
    },
    httpInterceptor: {
      allowedList: [
        {
          uri: 'http://localhost:3000/v1/*',
          allowAnonymous: true,
        },
      ],
    },
  },
};
