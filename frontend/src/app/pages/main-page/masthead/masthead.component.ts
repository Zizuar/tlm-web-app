import { Component, Input } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { ExistingRelease } from '../../../core/models/release.model';

@Component({
  selector: 'app-masthead',
  templateUrl: './masthead.component.html',
  styleUrls: ['./masthead.component.scss'],
})
export class MastheadComponent {
  @Input() countdowns: ExistingRelease[] | null | undefined;

  constructor(private readonly viewportScroller: ViewportScroller) {}

  scrollToFragment(section: string) {
    this.viewportScroller.scrollToAnchor(section);
  }
}
