import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashPressEditPreleaseModalComponent } from './dash-press-edit-prelease-modal.component';

describe('DashPressEditPreleaseModalComponent', () => {
  let component: DashPressEditPreleaseModalComponent;
  let fixture: ComponentFixture<DashPressEditPreleaseModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashPressEditPreleaseModalComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashPressEditPreleaseModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
