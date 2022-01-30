import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PressPhotosComponent } from './press-photos.component';

describe('PressPhotosComponent', () => {
  let component: PressPhotosComponent;
  let fixture: ComponentFixture<PressPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PressPhotosComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PressPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
