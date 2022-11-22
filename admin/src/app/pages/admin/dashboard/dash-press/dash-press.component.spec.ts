import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashPressComponent } from './dash-press.component';

describe('DashPressComponent', () => {
  let component: DashPressComponent;
  let fixture: ComponentFixture<DashPressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashPressComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashPressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
