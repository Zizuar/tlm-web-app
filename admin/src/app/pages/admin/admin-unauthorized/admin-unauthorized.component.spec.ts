import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUnauthorizedComponent } from './admin-unauthorized.component';

describe('AdminUnauthorizedComponent', () => {
  let component: AdminUnauthorizedComponent;
  let fixture: ComponentFixture<AdminUnauthorizedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminUnauthorizedComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUnauthorizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
