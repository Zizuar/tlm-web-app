import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashProductsEditProductModalComponent } from './dash-products-edit-product-modal.component';

describe('DashProductsEditProductModalComponent', () => {
  let component: DashProductsEditProductModalComponent;
  let fixture: ComponentFixture<DashProductsEditProductModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashProductsEditProductModalComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashProductsEditProductModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
