import { Component, OnDestroy, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { ToastService } from './services/toast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'tlm-web-app';

  constructor(
    private readonly meta: Meta,
    private readonly toastService: ToastService,
  ) {}

  ngOnInit() {
    this.meta.addTags(environment.metadata);
  }

  ngOnDestroy() {
    this.toastService.clear();
  }
}
