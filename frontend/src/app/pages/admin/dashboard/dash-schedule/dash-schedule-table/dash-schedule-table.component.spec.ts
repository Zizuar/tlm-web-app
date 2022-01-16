import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashScheduleTableComponent } from './dash-schedule-table.component';

describe('DashScheduleTableComponent', () => {
  let component: DashScheduleTableComponent;
  let fixture: ComponentFixture<DashScheduleTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashScheduleTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashScheduleTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
