import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashOrdersListActionButtonComponent } from './dash-orders-list-action-button.component';

describe('DashOrdersListActionButtonComponent', () => {
  let component: DashOrdersListActionButtonComponent;
  let fixture: ComponentFixture<DashOrdersListActionButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashOrdersListActionButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashOrdersListActionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
