export const environment = {
  production: true,
  baseUrl: 'https://tylerlevs.com',
  recaptcha: {
    sitekey: '6Ley8FwaAAAAAKrEXqlKLPkKivxIkfVN6VnnoHP7'
  },
  apiBaseUrl: 'https://tlm-api.herokuapp.com',
  auth: {
    clientId: 'QI6OizFa5JpBocC82KG2DXSX9VkSev9Y',
    domain: 'tlm-auth.us.auth0.com',
    audience: 'https://api.tylerlevs.com',
    httpInterceptor: {
      allowedList: [
        {
          uri: 'http://localhost:4200/v1/*',
        }
      ]
    },
  }
};
