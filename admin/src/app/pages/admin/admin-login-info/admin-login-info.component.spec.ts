import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLoginInfoComponent } from './admin-login-info.component';

describe('AdminLoginInfoComponent', () => {
  let component: AdminLoginInfoComponent;
  let fixture: ComponentFixture<AdminLoginInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminLoginInfoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLoginInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
