import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashEventsNewEventModalComponent } from './dash-events-new-event-modal.component';

describe('NewEventModalComponent', () => {
  let component: DashEventsNewEventModalComponent;
  let fixture: ComponentFixture<DashEventsNewEventModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashEventsNewEventModalComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashEventsNewEventModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
