import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashEventsEditEventModalComponent } from './dash-events-edit-event-modal.component';

describe('EditEventModalComponent', () => {
  let component: DashEventsEditEventModalComponent;
  let fixture: ComponentFixture<DashEventsEditEventModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashEventsEditEventModalComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashEventsEditEventModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
