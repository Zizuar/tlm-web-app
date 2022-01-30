import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashOrdersListItemComponent } from './dash-orders-list-item.component';

describe('DashOrdersListItemComponent', () => {
  let component: DashOrdersListItemComponent;
  let fixture: ComponentFixture<DashOrdersListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashOrdersListItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashOrdersListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
