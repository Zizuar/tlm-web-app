import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import dayjs from 'dayjs';
import { Store } from '@ngrx/store';
import { IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { faCalendarDay, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ExistingRelease, ReleaseCategories } from "../../../../../core/models/release.model";
import { updateRelease } from "../../../../../store/releases/releases.actions";
import {DateUtils} from "../../../../../utils/DateUtils";

@Component({
  selector: 'app-dash-releases-edit-release-modal',
  templateUrl: './dash-releases-edit-release-modal.component.html',
  styleUrls: ['./dash-releases-edit-release-modal.component.scss'],
})
export class DashReleasesEditReleaseModalComponent implements OnInit {
  @Input() release!: ExistingRelease;

  formDate: NgbDateStruct | undefined;

  faCalendar: IconDefinition = faCalendarDay;
  deleteIcon: IconDefinition = faTrash;
  addIcon: IconDefinition = faPlus;
  releaseCategories = ReleaseCategories;

  constructor(public readonly activeModal: NgbActiveModal, private readonly store: Store) {}

  ngOnInit() {
    if (this.release.category !== ReleaseCategories.Collections) {
      if (!this.release.links) {
        this.release.links = {
          spotify: '',
          amazon: '',
          apple: '',
        };
      }
    }
    const tzDate = dayjs(this.release.releaseDate);
    this.formDate = {
      year: tzDate.year(),
      month: tzDate.month() + 1,
      day: tzDate.date(),
    };
  }

  addLinksToArray() {
    if (this.release.linksArray) {
      this.release.linksArray = [
        ...this.release.linksArray,
        {
          title: '',
          spotify: '',
          amazon: '',
          apple: '',
        },
      ];
    } else {
      this.release.linksArray = [
        {
          title: '',
          spotify: '',
          amazon: '',
          apple: '',
        },
      ];
    }
  }

  removeLinksFromArray(index: number) {
    if (this.release.linksArray) {
      this.release.linksArray = this.release.linksArray.filter((v, i) => i !== index);
    }
  }

  addTrackToTracklist() {
    if (this.release.tracklist) {
      this.release.tracklist = [
        ...this.release.tracklist,
        {
          title: '',
          youtubeLink: '',
        },
      ];
    } else {
      this.release.tracklist = [
        {
          title: '',
          youtubeLink: '',
        },
      ];
    }
  }

  removeTrackFromTrackList(index: number) {
    if (this.release.tracklist) {
      this.release.tracklist = this.release.tracklist.filter((v, i) => i !== index);
    }
  }

  updateRelease() {
    this.release.releaseDate = DateUtils.buildDateFromFormData(this.formDate);
    this.store.dispatch(updateRelease({ updatedRelease: this.release }));
    this.activeModal.dismiss();
  }
}
