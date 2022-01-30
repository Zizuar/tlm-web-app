import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleaseDetailsMerchInfoComponent } from './release-details-merch-info.component';

describe('ReleaseDetailsMerchInfoComponent', () => {
  let component: ReleaseDetailsMerchInfoComponent;
  let fixture: ComponentFixture<ReleaseDetailsMerchInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReleaseDetailsMerchInfoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleaseDetailsMerchInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
