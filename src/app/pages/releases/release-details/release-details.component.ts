import { Component } from '@angular/core';
import {ReleasesService} from '../../../services/releases.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-release-details',
  templateUrl: './release-details.component.html',
  styleUrls: ['./release-details.component.scss']
})
export class ReleaseDetailsComponent {
  releases: Observable<Object[]> = this.releasesService.getAllReleases();

  constructor(private readonly releasesService: ReleasesService) { }

}
