import * as functions from 'firebase-functions';

export const ENVIRONMENT = functions.config()['environment'] || {};
export const CONFIG = functions.config()['config'] || {};
export const FIRESTORE_EMULATOR_HOST = 'localhost:8080';
