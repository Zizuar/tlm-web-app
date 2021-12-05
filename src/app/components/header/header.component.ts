import {Component, Input, OnDestroy,Renderer2} from '@angular/core';
import {throttle} from 'lodash';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnDestroy {
  @Input() pageType = '';
  listener;

  scrolled = false;

  isMenuCollapsed = true;

  constructor(private readonly renderer2: Renderer2) {
    this.listener = this.renderer2.listen('window', 'scroll', throttle(() => {
      this.scrolled = this.getYPosition() > 0;
    }, 200));
  }

  getYPosition(): number {
    return document.scrollingElement ? document.scrollingElement.scrollTop : 0;
  }

  ngOnDestroy() {
    this.listener();
  }

}
