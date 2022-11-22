import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashReleasesListItemComponent } from './dash-releases-list-item.component';

describe('DashReleasesListItemComponent', () => {
  let component: DashReleasesListItemComponent;
  let fixture: ComponentFixture<DashReleasesListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashReleasesListItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashReleasesListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
