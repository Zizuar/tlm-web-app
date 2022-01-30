import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchPromoComponent } from './merch-promo.component';

describe('MerchPromoComponent', () => {
  let component: MerchPromoComponent;
  let fixture: ComponentFixture<MerchPromoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MerchPromoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchPromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
