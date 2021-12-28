import {Component, Input} from '@angular/core';
import {Release} from '../../../services/releases.service';
import {ViewportScroller} from '@angular/common';

@Component({
  selector: 'app-masthead',
  templateUrl: './masthead.component.html',
  styleUrls: ['./masthead.component.scss']
})
export class MastheadComponent {
  @Input() countdowns: Release[] = [];

  constructor(
    private readonly viewportScroller: ViewportScroller,
  ) { }

  scrollToFragment(section: string) {
    this.viewportScroller.scrollToAnchor(section);
  }
}
