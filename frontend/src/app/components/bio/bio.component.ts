import { AfterViewInit, Component, Input } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss'],
})
export class BioComponent implements AfterViewInit {
  @Input() isSubPage = false;

  currentClasses = {
    'page-section': true,
    'bg-primary': true,
    'pb-0': true,
    'mb-4': true,
    'subpage-section': false,
  };

  constructor(private readonly viewportScroller: ViewportScroller) {}

  ngAfterViewInit() {
    this.currentClasses['subpage-section'] = this.isSubPage;
  }

  scrollToContacts() {
    this.viewportScroller.scrollToAnchor('contact');
  }
}
