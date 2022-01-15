import { Component, OnInit } from "@angular/core";
import { Store } from '@ngrx/store';
import { checkAuth } from "./store/auth.actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'tlm-web-app';

  constructor(private readonly store: Store) {}

  ngOnInit() {
    this.store.dispatch(checkAuth());
  }
}
