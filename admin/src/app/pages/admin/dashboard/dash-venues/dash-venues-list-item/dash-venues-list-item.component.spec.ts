import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashVenuesListItemComponent } from './dash-venues-list-item.component';

describe('DashVenuesListItemComponent', () => {
  let component: DashVenuesListItemComponent;
  let fixture: ComponentFixture<DashVenuesListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashVenuesListItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashVenuesListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
