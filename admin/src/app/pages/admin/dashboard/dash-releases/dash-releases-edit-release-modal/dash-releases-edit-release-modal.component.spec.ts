import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashReleasesEditReleaseModalComponent } from './dash-releases-edit-release-modal.component';

describe('DashPressEditReleaseModalComponent', () => {
  let component: DashReleasesEditReleaseModalComponent;
  let fixture: ComponentFixture<DashReleasesEditReleaseModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashReleasesEditReleaseModalComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashReleasesEditReleaseModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
