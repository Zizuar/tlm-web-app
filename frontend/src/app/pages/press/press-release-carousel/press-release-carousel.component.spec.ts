import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PressReleaseCarouselComponent } from './press-release-carousel.component';

describe('PressReleaseCarouselComponent', () => {
  let component: PressReleaseCarouselComponent;
  let fixture: ComponentFixture<PressReleaseCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PressReleaseCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PressReleaseCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
