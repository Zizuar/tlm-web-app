import { Component, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DashReleasesNewReleaseModalComponent } from './dash-releases-new-release-modal/dash-releases-new-release-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ExistingRelease } from "../../../../core/models/release.model";
import { selectReleases } from "../../../../store/releases/releases.selectors";
import { fetchReleases } from "../../../../store/releases/releases.actions";

@Component({
  selector: 'app-dash-releases',
  templateUrl: './dash-releases.component.html',
  styleUrls: ['./dash-releases.component.scss'],
})
export class DashReleasesComponent implements OnInit {
  plusSquare: IconDefinition = faPlusSquare;

  releases: Observable<ExistingRelease[]> = this.store.select(selectReleases);

  constructor(private readonly store: Store, private readonly modalService: NgbModal) {}

  ngOnInit() {
    this.store.dispatch(fetchReleases());
  }

  openNewReleaseModal() {
    this.modalService.open(DashReleasesNewReleaseModalComponent, {
      size: 'lg',
    });
  }
}
