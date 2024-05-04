import { Component, Input, OnDestroy, Renderer2 } from '@angular/core';
import { throttle } from 'lodash';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnDestroy {
  @Input() pageType = '';
  listener;

  scrolled = false;

  isMenuCollapsed = true;

  constructor(
    private readonly renderer2: Renderer2,
    private readonly viewportScroller: ViewportScroller,
    private readonly router: Router,
  ) {
    this.listener = this.renderer2.listen(
      'window',
      'scroll',
      throttle(() => {
        this.scrolled = this.getYPosition() > 0;
      }, 200),
    );
  }

  getYPosition(): number {
    return document.scrollingElement ? document.scrollingElement.scrollTop : 0;
  }

  handleFragmentLink(section: string) {
    if (this.pageType === 'main') {
      this.viewportScroller.scrollToAnchor(section);
    } else {
      this.router.navigate(['/'], { state: { scrollToFragment: section } });
    }
    this.isMenuCollapsed = true;
  }

  ngOnDestroy() {
    this.listener();
  }
}
