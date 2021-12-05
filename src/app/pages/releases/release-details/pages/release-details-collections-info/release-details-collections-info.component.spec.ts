import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleaseDetailsCollectionsInfoComponent } from './release-details-collections-info.component';

describe('ReleaseDetailsCollectionsInfoComponent', () => {
  let component: ReleaseDetailsCollectionsInfoComponent;
  let fixture: ComponentFixture<ReleaseDetailsCollectionsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReleaseDetailsCollectionsInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleaseDetailsCollectionsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
