import { Component, Input, OnInit } from '@angular/core';
import dayjs from 'dayjs';
import { NgbActiveModal, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { faCalendarDay, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { ExistingPressRelease } from "../../../../../core/models/press-release.model";
import { updatePressRelease } from "../../../../../store/press-releases/press-releases.actions";
import {DateUtils} from "../../../../../utils/DateUtils";

@Component({
  selector: 'app-dash-press-edit-prelease-modal',
  templateUrl: './dash-press-edit-prelease-modal.component.html',
  styleUrls: ['./dash-press-edit-prelease-modal.component.scss'],
})
export class DashPressEditPreleaseModalComponent implements OnInit {
  @Input() pressRelease!: ExistingPressRelease;

  formDate: NgbDateStruct | undefined;

  faCalendar: IconDefinition = faCalendarDay;
  deleteIcon: IconDefinition = faTrash;
  addIcon: IconDefinition = faPlus;

  constructor(public readonly activeModal: NgbActiveModal, private readonly store: Store) {}

  ngOnInit() {
    const tzDate = dayjs.utc(this.pressRelease.releaseAfter);
    this.formDate = {
      year: tzDate.year(),
      month: tzDate.month() + 1,
      day: tzDate.date(),
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
    this.store.dispatch(
      updatePressRelease({
        updatedPressRelease: this.pressRelease,
      })
    );
    this.activeModal.dismiss();
  }

  // This is needed for the array of primitive strings in the form
  trackByFn(index: any) {
    return index;
  }
}
