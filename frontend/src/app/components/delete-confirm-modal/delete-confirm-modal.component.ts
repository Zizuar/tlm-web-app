import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

export enum DeleteConfirmDialogResult {
  DELETE,
  CANCEL,
  CLOSE,
}

@Component({
  selector: 'app-delete-confirm-modal',
  templateUrl: './delete-confirm-modal.component.html',
  styleUrls: ['./delete-confirm-modal.component.scss'],
})
export class DeleteConfirmModalComponent {
  @Input() warningText: string = '';
  @Input() itemType: string = '';
  @Input() deleteBtnText: string = 'Delete';

  result = DeleteConfirmDialogResult;

  constructor(public activeModal: NgbActiveModal) {}
}
