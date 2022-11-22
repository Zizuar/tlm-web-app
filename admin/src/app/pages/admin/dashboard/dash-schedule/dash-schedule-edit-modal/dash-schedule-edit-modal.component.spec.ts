import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashScheduleEditModalComponent } from './dash-schedule-edit-modal.component';

describe('DashScheduleEditModalComponent', () => {
  let component: DashScheduleEditModalComponent;
  let fixture: ComponentFixture<DashScheduleEditModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashScheduleEditModalComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashScheduleEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
