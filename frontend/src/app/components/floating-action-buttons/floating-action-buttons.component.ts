import { Component } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { faMobilePhone, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faSpotify, faTiktok, faTwitch, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-floating-action-buttons',
  templateUrl: './floating-action-buttons.component.html',
  styleUrl: './floating-action-buttons.component.scss',
})
export class FloatingActionButtonsComponent {
  faPhone: IconDefinition = faMobilePhone;
  faCancel: IconDefinition = faTimes;
  faInstagram: IconDefinition = faInstagram;
  faTwitter: IconDefinition = faXTwitter;
  faTiktok: IconDefinition = faTiktok;
  faSpotify: IconDefinition = faSpotify;
  faYoutube: IconDefinition = faYoutube;
  faTwitch: IconDefinition = faTwitch;

  isExpanded = false;

  setExpanded(expanded: boolean, disableTouchDevice = false): void {
    if (!disableTouchDevice || !this.isTouchDevice()) {
      this.isExpanded = expanded;
    }
  }

  private isTouchDevice(): boolean {
    return (
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      ('msMaxTouchPoints' in navigator && (navigator.msMaxTouchPoints as number) > 0)
    );
  }
}
