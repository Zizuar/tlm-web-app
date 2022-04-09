import { Component, Input } from '@angular/core';
import { Release } from '../../../services/releases.service';
import { IconDefinition } from '@fortawesome/free-regular-svg-icons';
import {
  faChevronRight,
  faChevronLeft,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-press-release-carousel',
  templateUrl: './press-release-carousel.component.html',
  styleUrls: ['./press-release-carousel.component.scss'],
})
export class PressReleaseCarouselComponent {
  @Input() releases: Release[] = [];

  faChevronRight: IconDefinition = faChevronRight;
  faChevronLeft: IconDefinition = faChevronLeft;
  faEnvelope: IconDefinition = faEnvelope;

  environment = environment;

  constructor() {}
}
