import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashScheduleComponent } from './dash-schedule.component';

describe('DashScheduleComponent', () => {
  let component: DashScheduleComponent;
  let fixture: ComponentFixture<DashScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashScheduleComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
