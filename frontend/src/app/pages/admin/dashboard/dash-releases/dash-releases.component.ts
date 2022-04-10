import { Component, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { fetchReleases } from '../../../../store/releases/releases.actions';
import { ExistingRelease } from '../../../../core/models/release.model';
import { Observable } from 'rxjs';
import { selectReleases } from '../../../../store/releases/releases.selectors';

@Component({
  selector: 'app-dash-releases',
  templateUrl: './dash-releases.component.html',
  styleUrls: ['./dash-releases.component.scss'],
})
export class DashReleasesComponent implements OnInit {
  plusSquare: IconDefinition = faPlusSquare;

  releases: Observable<ExistingRelease[]> = this.store.select(selectReleases);

  constructor(private readonly store: Store) {}

  ngOnInit() {
    this.store.dispatch(fetchReleases());
  }

  openNewReleaseModal() {
    console.log('Opening new release modal');
  }
}
