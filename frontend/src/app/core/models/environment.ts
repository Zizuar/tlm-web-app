import { MetaDefinition } from "@angular/platform-browser";

export interface Environment {
  production: boolean;
  baseUrl: string;
  recaptcha: {
    sitekey: string;
  };
  apiBaseUrl: string;
  metadata: MetaDefinition[],
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
      ]
    };
  }

}
