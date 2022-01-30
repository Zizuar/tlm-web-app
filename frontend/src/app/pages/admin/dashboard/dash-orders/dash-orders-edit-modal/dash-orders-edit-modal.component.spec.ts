import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashOrdersEditModalComponent } from './dash-orders-edit-modal.component';

describe('DashOrdersEditModalComponent', () => {
  let component: DashOrdersEditModalComponent;
  let fixture: ComponentFixture<DashOrdersEditModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashOrdersEditModalComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashOrdersEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
