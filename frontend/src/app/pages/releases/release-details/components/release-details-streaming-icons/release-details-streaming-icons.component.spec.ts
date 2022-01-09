import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleaseDetailsStreamingIconsComponent } from './release-details-streaming-icons.component';

describe('ReleaseDetailsStreamingIconsComponent', () => {
  let component: ReleaseDetailsStreamingIconsComponent;
  let fixture: ComponentFixture<ReleaseDetailsStreamingIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReleaseDetailsStreamingIconsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleaseDetailsStreamingIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
