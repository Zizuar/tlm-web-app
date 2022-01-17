// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseUrl: "http://localhost:4200",
  recaptcha: {
    sitekey: "6Ley8FwaAAAAAKrEXqlKLPkKivxIkfVN6VnnoHP7"
  },
  apiBaseUrl: "http://localhost:3000",
  auth: {
    clientId: "pTkbwjYx6vpV8qzhO7lioKupoSa5IbUP",
    domain: "tlm-auth-dev.us.auth0.com",
    audience: "https://api-test",
    httpInterceptor: {
      allowedList: [
        {
          uri: "http://localhost:3000/v1/*",
          allowAnonymous: true
        }
      ]
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
