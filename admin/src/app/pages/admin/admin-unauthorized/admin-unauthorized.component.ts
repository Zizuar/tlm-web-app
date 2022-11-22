import { Component } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { faBan } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin-unauthorized',
  templateUrl: './admin-unauthorized.component.html',
  styleUrls: ['./admin-unauthorized.component.scss'],
})
export class AdminUnauthorizedComponent {
  faBan: IconDefinition = faBan;
}
