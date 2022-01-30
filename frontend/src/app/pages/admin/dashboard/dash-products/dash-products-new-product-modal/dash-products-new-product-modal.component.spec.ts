import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashProductsNewProductModalComponent } from './dash-products-new-product-modal.component';

describe('DashProductsNewProductModalComponent', () => {
  let component: DashProductsNewProductModalComponent;
  let fixture: ComponentFixture<DashProductsNewProductModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashProductsNewProductModalComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashProductsNewProductModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
