import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashOrdersListComponent } from './dash-orders-list.component';

describe('DashOrdersListComponent', () => {
  let component: DashOrdersListComponent;
  let fixture: ComponentFixture<DashOrdersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashOrdersListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashOrdersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
