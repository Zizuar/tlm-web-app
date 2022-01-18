import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { selectScopes } from "../../../store/auth.selectors";
import { Store } from "@ngrx/store";
import { SCOPES } from "../../../core/auth/scopes";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  activeTab = 'index';

  SCOPES = SCOPES;
  readonly scopes$: Observable<string>;

  constructor(private readonly store: Store) {
    this.scopes$ = this.store.select(selectScopes);
  }
}
