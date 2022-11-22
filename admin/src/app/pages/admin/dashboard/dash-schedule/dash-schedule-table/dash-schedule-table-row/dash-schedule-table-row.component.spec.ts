import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashScheduleTableRowComponent } from './dash-schedule-table-row.component';

describe('DashScheduleTableRowComponent', () => {
  let component: DashScheduleTableRowComponent;
  let fixture: ComponentFixture<DashScheduleTableRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashScheduleTableRowComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashScheduleTableRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
