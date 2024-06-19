import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mutu4lComponent } from './mutu4l.component';

describe('Mutu4lComponent', () => {
  let component: Mutu4lComponent;
  let fixture: ComponentFixture<Mutu4lComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Mutu4lComponent],
    });
    fixture = TestBed.createComponent(Mutu4lComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
