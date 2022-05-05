import { Component } from '@angular/core';
import * as moment from 'moment';
import {
  AlbumTrack,
  NewRelease,
  ReleaseCategories,
  ReleaseLinks,
} from '../../../../../core/models/release.model';
import { IconDefinition } from '@fortawesome/free-regular-svg-icons';
import {
  faCalendarDay,
  faPlus,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { NgbActiveModal, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { createRelease } from '../../../../../store/releases/releases.actions';

@Component({
  selector: 'app-dash-releases-new-release-modal',
  templateUrl: './dash-releases-new-release-modal.component.html',
  styleUrls: ['./dash-releases-new-release-modal.component.scss'],
})
export class DashReleasesNewReleaseModalComponent {
  moment = moment;

  faCalendar: IconDefinition = faCalendarDay;
  deleteIcon: IconDefinition = faTrash;
  addIcon: IconDefinition = faPlus;

  release: NewRelease;
  formDate: NgbDateStruct | undefined;
  releaseCategories = ReleaseCategories;
  formOptionalParts = {
    presaveLink: '',
    links: {
      spotify: '',
      amazon: '',
      apple: '',
    },
    linksArray: [] as ReleaseLinks[],
    trackList: [] as AlbumTrack[],
  };

  constructor(
    public readonly activeModal: NgbActiveModal,
    private readonly store: Store
  ) {
    this.release = {
      id: '',
      title: '',
      category: ReleaseCategories.Songs,
      releaseDate: new Date(),
      imageName: '',
      text: {
        header: '',
        subheader: '',
        text: '',
      },
      onPressPage: false,
      orderEnabled: false,
      merchEnabled: false,
    };
  }

  addLinksToArray() {
    this.formOptionalParts.linksArray = [
      ...this.formOptionalParts.linksArray,
      {
        title: '',
        spotify: '',
        amazon: '',
        apple: '',
      },
    ];
  }

  removeLinksFromArray(index: number) {
    this.formOptionalParts.linksArray =
      this.formOptionalParts.linksArray.filter((v, i) => i !== index);
  }

  addTrackToTracklist() {
    this.formOptionalParts.trackList = [
      ...this.formOptionalParts.trackList,
      {
        title: '',
        youtubeLink: '',
      },
    ];
  }

  removeTrackFromTrackList(index: number) {
    this.formOptionalParts.trackList = this.formOptionalParts.trackList.filter(
      (v, i) => i !== index
    );
  }

  saveNewRelease() {
    this.release.releaseDate = this.buildDate();
    if (
      this.formOptionalParts.presaveLink &&
      this.release.category !== ReleaseCategories.Collections
    ) {
      this.release.presaveLink = this.formOptionalParts.presaveLink;
    }
    if (this.release.category !== ReleaseCategories.Collections) {
      this.release.links = this.formOptionalParts.links;
    }
    if (
      this.release.category === ReleaseCategories.Collections &&
      this.formOptionalParts.linksArray.length > 0
    ) {
      this.release.linksArray = this.formOptionalParts.linksArray;
    }
    if (
      this.release.category === ReleaseCategories.Albums &&
      this.formOptionalParts.trackList.length > 0
    ) {
      this.release.tracklist = this.formOptionalParts.trackList;
    }
    this.store.dispatch(createRelease({ newRelease: this.release }));
    this.activeModal.dismiss();
  }

  private buildDate(): Date {
    // build date from datepicker data
    const momentDate = this.moment(
      `${this.formDate?.year}-${this.formDate?.month
        .toString()
        .padStart(2, '0')}-${this.formDate?.day.toString().padStart(2, '0')}`
    ).utc(true);
    return momentDate.toDate();
  }
}
