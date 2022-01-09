import { Component } from '@angular/core';
import {ViewportScroller} from '@angular/common';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss']
})
export class BioComponent {

  constructor(private readonly viewportScroller: ViewportScroller) { }

  scrollToContacts() {
    this.viewportScroller.scrollToAnchor('contact');
  }
}
