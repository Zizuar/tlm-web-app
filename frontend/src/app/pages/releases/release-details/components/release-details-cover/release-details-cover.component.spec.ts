import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleaseDetailsCoverComponent } from './release-details-cover.component';

describe('ReleaseDetailsCoverComponent', () => {
  let component: ReleaseDetailsCoverComponent;
  let fixture: ComponentFixture<ReleaseDetailsCoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReleaseDetailsCoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleaseDetailsCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
