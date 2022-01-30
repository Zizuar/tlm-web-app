import { Component } from '@angular/core';
import { Release } from '../../../services/releases.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-release-list',
  templateUrl: './release-list.component.html',
  styleUrls: ['./release-list.component.scss'],
})
export class ReleaseListComponent {
  releases: Release[] = this.activatedRoute.snapshot.data['releases'];
  constructor(private activatedRoute: ActivatedRoute) {}
}
