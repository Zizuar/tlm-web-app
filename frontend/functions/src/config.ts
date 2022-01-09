import * as functions from 'firebase-functions';

export const ENVIRONMENT = functions.config()['environment'] || {};
export const CONFIG = functions.config()['config'] || {};
