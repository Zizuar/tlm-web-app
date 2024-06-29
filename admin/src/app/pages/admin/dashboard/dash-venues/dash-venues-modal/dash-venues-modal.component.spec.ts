import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashVenuesModalComponent } from './dash-venues-modal.component';

describe('DashVenuesModalComponent', () => {
  let component: DashVenuesModalComponent;
  let fixture: ComponentFixture<DashVenuesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashVenuesModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashVenuesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
