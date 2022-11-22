import { MetaDefinition } from '@angular/platform-browser';

export interface Environment {
  production: boolean;
  baseUrl: string;
  recaptcha: {
    sitekey: string;
  };
  apiBaseUrl: string;
  coversAssetUrl: string;
  metadata: MetaDefinition[];
}
