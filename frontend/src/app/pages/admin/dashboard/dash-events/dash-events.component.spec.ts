import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashEventsComponent } from './dash-events.component';

describe('DashEventsComponent', () => {
  let component: DashEventsComponent;
  let fixture: ComponentFixture<DashEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
