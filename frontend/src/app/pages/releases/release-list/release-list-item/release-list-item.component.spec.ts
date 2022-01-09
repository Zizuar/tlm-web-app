import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleaseListItemComponent } from './release-list-item.component';

describe('ReleaseListItemComponent', () => {
  let component: ReleaseListItemComponent;
  let fixture: ComponentFixture<ReleaseListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReleaseListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleaseListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
