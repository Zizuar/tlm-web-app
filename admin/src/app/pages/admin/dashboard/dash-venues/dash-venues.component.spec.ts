import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashVenuesComponent } from './dash-venues.component';

describe('DashVenuesComponent', () => {
  let component: DashVenuesComponent;
  let fixture: ComponentFixture<DashVenuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashVenuesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashVenuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
