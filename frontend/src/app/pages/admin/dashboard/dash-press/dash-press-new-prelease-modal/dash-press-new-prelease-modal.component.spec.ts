import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashPressNewPreleaseModalComponent } from './dash-press-new-prelease-modal.component';

describe('DashPressNewPreleaseModalComponent', () => {
  let component: DashPressNewPreleaseModalComponent;
  let fixture: ComponentFixture<DashPressNewPreleaseModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashPressNewPreleaseModalComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashPressNewPreleaseModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
