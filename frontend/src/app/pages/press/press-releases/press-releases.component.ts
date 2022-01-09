import { Component } from '@angular/core';
import { PressRelease, PressReleaseService } from '../../../services/press-release.service';
import { Observable } from 'rxjs';
import * as moment from 'moment';

@Component({
  selector: 'app-press-releases',
  templateUrl: './press-releases.component.html',
  styleUrls: ['./press-releases.component.scss']
})
export class PressReleasesComponent {
  pressReleases: Observable<PressRelease[]>;

  moment = moment;

  constructor(
    private readonly pressReleaseService: PressReleaseService
  ) {
    this.pressReleases = this.pressReleaseService.getPressReleases();
  }

}
