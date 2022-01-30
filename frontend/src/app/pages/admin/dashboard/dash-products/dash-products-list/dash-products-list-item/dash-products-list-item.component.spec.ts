import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashProductsListItemComponent } from './dash-products-list-item.component';

describe('DashProductsListItemComponent', () => {
  let component: DashProductsListItemComponent;
  let fixture: ComponentFixture<DashProductsListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashProductsListItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashProductsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
