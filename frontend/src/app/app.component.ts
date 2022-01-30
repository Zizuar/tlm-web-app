import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { checkAuth } from './store/auth/auth.actions';
import { Meta } from '@angular/platform-browser';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'tlm-web-app';

  constructor(private readonly store: Store, private readonly meta: Meta) {}

  ngOnInit() {
    this.store.dispatch(checkAuth());
    this.meta.addTags(environment.metadata);
  }
}
