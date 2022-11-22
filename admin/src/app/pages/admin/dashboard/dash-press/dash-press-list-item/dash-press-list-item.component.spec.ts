import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashPressListItemComponent } from './dash-press-list-item.component';

describe('DashPressListItemComponent', () => {
  let component: DashPressListItemComponent;
  let fixture: ComponentFixture<DashPressListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashPressListItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashPressListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
