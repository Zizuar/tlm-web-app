import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamingIconComponent } from './streaming-icon.component';

describe('StreamingIconComponent', () => {
  let component: StreamingIconComponent;
  let fixture: ComponentFixture<StreamingIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StreamingIconComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamingIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
