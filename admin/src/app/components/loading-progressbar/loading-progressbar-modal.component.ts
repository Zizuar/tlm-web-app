import { Component, Input } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { BehaviorSubject, Observable, Subject, Subscription } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: 'app-loading-progressbar',
  templateUrl: './loading-progressbar-modal.component.html',
  styleUrls: ['./loading-progressbar-modal.component.scss']
})
export class LoadingProgressbarModalComponent {
  @Input() totalNumber: number = 10;
  @Input() progress: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  readonly progress$: Observable<number> = this.progress.asObservable();

  readonly progressPct = this.progress.pipe(
    map((progress: number) => {
      return this.totalNumber ? Math.round((progress / this.totalNumber) * 100) : 100;
    })
  );

  private readonly subs: Subscription[] = [];

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {
    this.subs.push(
      this.progress.subscribe((progress: number) => {
        if (progress >= this.totalNumber) {
          setTimeout(() => {
            this.activeModal.close();
          }, 500);
        }
      }),
    );
  }

  ngOnDestroy() {
    this.subs.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
