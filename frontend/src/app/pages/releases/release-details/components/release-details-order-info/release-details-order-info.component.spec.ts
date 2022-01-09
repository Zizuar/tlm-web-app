import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleaseDetailsOrderInfoComponent } from './release-details-order-info.component';

describe('ReleaseDetailsOrderInfoComponent', () => {
  let component: ReleaseDetailsOrderInfoComponent;
  let fixture: ComponentFixture<ReleaseDetailsOrderInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReleaseDetailsOrderInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleaseDetailsOrderInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
