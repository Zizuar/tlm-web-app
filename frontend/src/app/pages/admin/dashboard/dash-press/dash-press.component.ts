import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { fetchPressReleases } from '../../../../store/press-releases/press-releases.actions';
import { selectPressReleases } from '../../../../store/press-releases/press-releases.selectors';
import { ExistingPressRelease } from '../../../../core/models/press-release.model';
import { Observable } from 'rxjs';
import { DashPressNewPreleaseModalComponent } from './dash-press-new-prelease-modal/dash-press-new-prelease-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  faPlusSquare,
  IconDefinition,
} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-dash-press',
  templateUrl: './dash-press.component.html',
  styleUrls: ['./dash-press.component.scss'],
})
export class DashPressComponent implements OnInit {
  plusSquare: IconDefinition = faPlusSquare;

  pressReleases$: Observable<ExistingPressRelease[]> =
    this.store.select(selectPressReleases);

  constructor(
    private readonly store: Store,
    private readonly modalService: NgbModal
  ) {}

  ngOnInit() {
    this.store.dispatch(fetchPressReleases());
  }

  openNewPressReleaseModal() {
    this.modalService.open(DashPressNewPreleaseModalComponent, {
      size: 'lg',
    });
  }
}
