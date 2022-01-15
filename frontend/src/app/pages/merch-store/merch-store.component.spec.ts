import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchStoreComponent } from './merch-store.component';

describe('StoreComponent', () => {
  let component: MerchStoreComponent;
  let fixture: ComponentFixture<MerchStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchStoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
