import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleaseDetailsAlbumInfoComponent } from './release-details-album-info.component';

describe('ReleaseDetailsAlbumInfoComponent', () => {
  let component: ReleaseDetailsAlbumInfoComponent;
  let fixture: ComponentFixture<ReleaseDetailsAlbumInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReleaseDetailsAlbumInfoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleaseDetailsAlbumInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
