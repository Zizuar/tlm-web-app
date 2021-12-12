import {Component, Input} from '@angular/core';
import {Release} from '../../../services/releases.service';

@Component({
  selector: 'app-masthead',
  templateUrl: './masthead.component.html',
  styleUrls: ['./masthead.component.scss']
})
export class MastheadComponent {
  @Input() countdowns: Release[] = [];
}
