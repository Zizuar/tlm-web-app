import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleaseItemLinksListComponent } from './release-item-links-list.component';

describe('ReleaseItemLinksListComponent', () => {
  let component: ReleaseItemLinksListComponent;
  let fixture: ComponentFixture<ReleaseItemLinksListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReleaseItemLinksListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleaseItemLinksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
