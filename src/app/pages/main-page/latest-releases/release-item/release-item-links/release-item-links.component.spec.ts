import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleaseItemLinksComponent } from './release-item-links.component';

describe('ReleaseItemLinksComponent', () => {
  let component: ReleaseItemLinksComponent;
  let fixture: ComponentFixture<ReleaseItemLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReleaseItemLinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleaseItemLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
