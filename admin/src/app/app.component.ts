import { Component, OnDestroy, OnInit } from "@angular/core";
import { Store } from '@ngrx/store';
import { checkAuth } from './store/auth/auth.actions';
import { ToastService } from "./services/toast.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'tlm-admin';

  constructor(
    private readonly store: Store,
    private readonly toastService: ToastService
  ) {}

  ngOnInit() {
    this.store.dispatch(checkAuth());
  }

  ngOnDestroy() {
    this.toastService.clear();
  }
}
