import { Component } from '@angular/core';
import { Release, ReleasesService } from '../../../services/releases.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-latest-releases',
  templateUrl: './latest-releases.component.html',
  styleUrls: ['./latest-releases.component.scss']
})
export class LatestReleasesComponent {
  releases: Observable<Release[]> = this.releasesService.getAllReleases();

  constructor(
    private readonly releasesService: ReleasesService,
  ) { }

}
