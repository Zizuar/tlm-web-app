import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleaseDetailsSongInfoComponent } from './release-details-song-info.component';

describe('ReleaseDetailsSongInfoComponent', () => {
  let component: ReleaseDetailsSongInfoComponent;
  let fixture: ComponentFixture<ReleaseDetailsSongInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReleaseDetailsSongInfoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleaseDetailsSongInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
