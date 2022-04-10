import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ExistingRelease } from '../../../core/models/release.model';

@Component({
  selector: 'app-release-details',
  templateUrl: './release-details.component.html',
  styleUrls: ['./release-details.component.scss'],
})
export class ReleaseDetailsComponent implements OnDestroy {
  release: ExistingRelease = this.activatedRoute.snapshot.data['release'];
  paramsSub: Subscription = new Subscription();

  constructor(private readonly activatedRoute: ActivatedRoute) {
    this.paramsSub = this.activatedRoute.data.subscribe((data) => {
      this.release = data['release'];
    });
  }

  ngOnDestroy() {
    this.paramsSub.unsubscribe();
  }
}
