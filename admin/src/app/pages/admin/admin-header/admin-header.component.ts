import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss'],
})
export class AdminHeaderComponent {
  @Input() isLoggedIn = false;
  @Input() profile: any = {};
  @Output() loginEvent = new EventEmitter();
  @Output() logoutEvent = new EventEmitter();

  constructor() {}

  login() {
    this.loginEvent.emit();
  }

  logout() {
    this.logoutEvent.emit();
  }
}
