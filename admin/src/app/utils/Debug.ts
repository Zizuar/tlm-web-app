import { environment } from "../../environments/environment";

export class Debug {
  static log(message?: any, ...optionalParams: any[]) {
    if (!environment.production) {
      console.log(message, ...optionalParams);
    }
  }

  static error(message?: any, ...optionalParams: any[]) {
    if (!environment.production) {
      console.error(message, ...optionalParams);
    }
  }
}
