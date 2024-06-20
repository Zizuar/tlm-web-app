import { Environment } from '../app/core/models/environment';

export const environment: Environment = {
  production: true,
  baseUrl: 'https://admin.tylerlevs.com',
  apiBaseUrl: 'https://api.tylerlevs.com',
  auth: {
    clientId: 'QI6OizFa5JpBocC82KG2DXSX9VkSev9Y',
    domain: 'tlm-auth.us.auth0.com',
    authorizationParams: {
      audience: 'https://api.tylerlevs.com',
    },
    httpInterceptor: {
      allowedList: [
        {
          uri: 'https://api.tylerlevs.com/v1/*',
          allowAnonymous: true,
        },
      ],
    },
  },
};
