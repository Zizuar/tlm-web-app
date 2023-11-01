import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingProgressbarModalComponent } from './loading-progressbar-modal.component';

describe('LoadingProgressbarComponent', () => {
  let component: LoadingProgressbarModalComponent;
  let fixture: ComponentFixture<LoadingProgressbarModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoadingProgressbarModalComponent]
    });
    fixture = TestBed.createComponent(LoadingProgressbarModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
