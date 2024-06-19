import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import * as dayjs from 'dayjs';
import * as utc from 'dayjs/plugin/utc';
import * as localizedFormat from 'dayjs/plugin/localizedFormat';
import * as duration from 'dayjs/plugin/duration';
import * as timezone from 'dayjs/plugin/timezone';
import * as advancedFormat from 'dayjs/plugin/advancedFormat';
import 'dayjs/locale/en';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

dayjs.extend(utc);
dayjs.extend(localizedFormat);
dayjs.extend(duration);
dayjs.extend(timezone);
dayjs.extend(advancedFormat);
dayjs.tz.setDefault('America/New_York');
dayjs.locale('en');

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
