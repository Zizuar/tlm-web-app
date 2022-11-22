import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashProductsListComponent } from './dash-products-list.component';

describe('DashProductsListComponent', () => {
  let component: DashProductsListComponent;
  let fixture: ComponentFixture<DashProductsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashProductsListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashProductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
