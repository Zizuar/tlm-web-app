import { Component } from '@angular/core';
import { StatusService } from './services/status.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tlm-web-app';
  status = 'DOWN';

  constructor(private statusService: StatusService) { }

  ngOnInit() {
    this.statusService
      .getStatus()
      .then((result: any) => {
        this.status = result.status;
      });
  }
}
