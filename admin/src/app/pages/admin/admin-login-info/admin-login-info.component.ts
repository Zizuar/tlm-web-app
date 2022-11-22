import { Component } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin-login-info',
  templateUrl: './admin-login-info.component.html',
  styleUrls: ['./admin-login-info.component.scss'],
})
export class AdminLoginInfoComponent {
  faSignIn: IconDefinition = faSignInAlt;
}
