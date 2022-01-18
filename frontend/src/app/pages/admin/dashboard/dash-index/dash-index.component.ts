import { Component } from '@angular/core';
import { faHandPointLeft, IconDefinition } from "@fortawesome/free-regular-svg-icons";

@Component({
  selector: 'app-dash-index',
  templateUrl: './dash-index.component.html',
  styleUrls: ['./dash-index.component.scss']
})
export class DashIndexComponent {
  faHand: IconDefinition = faHandPointLeft;
}
