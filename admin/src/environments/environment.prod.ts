import { Environment } from '../app/core/models/environment';

export const environment: Environment = {
  production: true,
  baseUrl: 'https://admin.tylerlevs.com',
  apiBaseUrl: 'https://api.yourdomain.com',
  auth: {
    clientId: 'QI6OizFa5JpBocC82KG2DXSX9VkSev9Y',
    domain: 'tlm-auth.us.auth0.com',
    authorizationParams: {
      audience: 'https://api.yourdomain.com',
    },
    httpInterceptor: {
      allowedList: [
        {
          uri: 'https://api.yourdomain.com/v1/*',
          allowAnonymous: true,
        },
      ],
    },
  },
};
