import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { selectScopes } from "../../../store/auth.selectors";
import { Store } from "@ngrx/store";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  readonly scopes$: Observable<string>;

  constructor(private readonly store: Store) {
    this.scopes$ = this.store.select(selectScopes);
  }
}
