import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

interface Status {
  status: string
}

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  private statusUrl = '/api/status';

  constructor(private http: HttpClient) { }

  // Get the status
  getStatus(): Promise<void | any> {
    return lastValueFrom(this.http.get<Status>(this.statusUrl))
               .catch(this.error);
  }

  // Error handling
  private error (error: any) {
    let message = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(message);
  }
}