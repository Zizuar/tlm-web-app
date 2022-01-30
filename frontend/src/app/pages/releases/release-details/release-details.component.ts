import { Component, OnDestroy } from '@angular/core';
import { Release } from '../../../services/releases.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-release-details',
  templateUrl: './release-details.component.html',
  styleUrls: ['./release-details.component.scss'],
})
export class ReleaseDetailsComponent implements OnDestroy {
  release: Release = this.activatedRoute.snapshot.data['release'];
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
