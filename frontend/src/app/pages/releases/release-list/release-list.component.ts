import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExistingRelease } from '../../../core/models/release.model';

@Component({
  selector: 'app-release-list',
  templateUrl: './release-list.component.html',
  styleUrls: ['./release-list.component.scss'],
})
export class ReleaseListComponent {
  releases: ExistingRelease[] = this.activatedRoute.snapshot.data['releases'];

  constructor(private activatedRoute: ActivatedRoute) {}
}
