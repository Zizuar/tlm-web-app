import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashEventsSelectVenueModalComponent } from './dash-events-select-venue-modal.component';

describe('DashEventsSelectVenueModalComponent', () => {
  let component: DashEventsSelectVenueModalComponent;
  let fixture: ComponentFixture<DashEventsSelectVenueModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashEventsSelectVenueModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashEventsSelectVenueModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
