import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashReleasesNewReleaseModalComponent } from './dash-releases-new-release-modal.component';

describe('DashPressNewReleaseModalComponent', () => {
  let component: DashReleasesNewReleaseModalComponent;
  let fixture: ComponentFixture<DashReleasesNewReleaseModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashReleasesNewReleaseModalComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashReleasesNewReleaseModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
