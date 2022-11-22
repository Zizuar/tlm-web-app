export interface Environment {
  production: boolean;
  baseUrl: string;
  apiBaseUrl: string;
  auth: {
    clientId: string;
    domain: string;
    audience: string;
    httpInterceptor: {
      allowedList: [
        {
          uri: string;
          allowAnonymous: boolean;
        }
      ];
    };
  };
}
