import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashEventsListItemComponent } from './dash-events-list-item.component';

describe('DashEventsListItemComponent', () => {
  let component: DashEventsListItemComponent;
  let fixture: ComponentFixture<DashEventsListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashEventsListItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashEventsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
