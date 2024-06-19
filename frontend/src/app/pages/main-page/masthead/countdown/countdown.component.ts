import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss'],
})
export class CountdownComponent implements OnInit, OnDestroy {
  @Input() releaseDate: Date = new Date();
  private subscription = new Subscription();

  private readonly milliSecondsInASecond = 1000;
  private readonly hoursInADay = 24;
  private readonly minutesInAnHour = 60;
  private readonly SecondsInAMinute = 60;

  public timeDifference: number = 0;
  public secondsToReleaseDate: number = 0;
  public minutesToReleaseDate: number = 0;
  public hoursToReleaseDate: number = 0;
  public daysToReleaseDate: number = 0;

  constructor(private readonly viewportScroller: ViewportScroller) {}

  ngOnInit() {
    this.subscription = interval(1000).subscribe(() => {
      this.getTimeDifference();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  scrollToFragment(section: string) {
    this.viewportScroller.scrollToAnchor(section);
  }

  private getTimeDifference() {
    this.timeDifference = this.releaseDate.getTime() - new Date().getTime();
    this.allocateTimeUnits(this.timeDifference);
  }

  private allocateTimeUnits(timeDifference: number) {
    this.secondsToReleaseDate = Math.floor((timeDifference / this.milliSecondsInASecond) % this.SecondsInAMinute);
    this.minutesToReleaseDate = Math.floor(
      (timeDifference / (this.milliSecondsInASecond * this.minutesInAnHour)) % this.SecondsInAMinute,
    );
    this.hoursToReleaseDate = Math.floor(
      (timeDifference / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute)) % this.hoursInADay,
    );
    this.daysToReleaseDate = Math.floor(
      timeDifference / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute * this.hoursInADay),
    );
  }
}
