import { Component } from '@angular/core';
import { NgbActiveModal, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { faCalendarDay, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { NewPressRelease } from "../../../../../core/models/press-release.model";
import { createPressRelease } from "../../../../../store/press-releases/press-releases.actions";
import {DateUtils} from "../../../../../utils/DateUtils";

@Component({
  selector: 'app-dash-press-new-prelease-modal',
  templateUrl: './dash-press-new-prelease-modal.component.html',
  styleUrls: ['./dash-press-new-prelease-modal.component.scss'],
})
export class DashPressNewPreleaseModalComponent {
  pressRelease: NewPressRelease;
  formDate: NgbDateStruct | undefined;

  faCalendar: IconDefinition = faCalendarDay;
  deleteIcon: IconDefinition = faTrash;
  addIcon: IconDefinition = faPlus;

  constructor(public readonly activeModal: NgbActiveModal, private readonly store: Store) {
    this.pressRelease = {
      songId: '',
      imgName: '',
      dateStamp: {
        place: '',
        date: '',
      },
      releaseAfter: new Date(),
      text: {
        header: '',
        subheader: '',
        paragraphs: [''],
      },
    };
  }

  addParagraph() {
    this.pressRelease.text.paragraphs.push('');
  }

  removeParagraph(index: number) {
    this.pressRelease.text.paragraphs = this.pressRelease.text.paragraphs.filter((item, i) => index !== i);
  }

  addLinks() {
    this.pressRelease.links = {
      spotify: '',
      amazon: '',
      apple: '',
    };
  }

  removeLinks() {
    delete this.pressRelease.links;
  }

  saveNewPressRelease() {
    this.pressRelease.releaseAfter = DateUtils.buildDateFromFormData(this.formDate);
    this.store.dispatch(createPressRelease({ newPressRelease: this.pressRelease }));
    this.activeModal.dismiss();
  }

  // This is needed for the array of primitive strings in the form
  trackByFn(index: any) {
    return index;
  }
}
