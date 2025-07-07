// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { Environment } from '../app/core/models/environment';

export const environment: Environment = {
  production: false,
  baseUrl: 'http://localhost:4201',
  apiBaseUrl: 'http://localhost:3000',
  auth: {
    clientId: 'Ek564B5WgAT8JOdrIWzAfaFWL8wtK5yw',
    domain: 'dev-1bc2dx7bgmn40n6e.us.auth0.com',
    authorizationParams: {
      audience: 'https://tlm-web-app-api',
      scope: 'openid profile email'
    },
    useRefreshTokens: true,
    cacheLocation: 'localstorage',
    httpInterceptor: {
      allowedList: [
        {
          uri: 'http://localhost:3000/v1/*',
          allowAnonymous: false,
        },
      ],
    },
  },
};
