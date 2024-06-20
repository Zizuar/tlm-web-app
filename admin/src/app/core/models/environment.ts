import {AuthorizationParams} from "@auth0/auth0-angular";

export interface Environment {
  production: boolean;
  baseUrl: string;
  apiBaseUrl: string;
  auth: {
    clientId: string;
    domain: string;
    authorizationParams?: AuthorizationParams;
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
