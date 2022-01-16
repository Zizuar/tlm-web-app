import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashReleasesComponent } from './dash-releases.component';

describe('DashReleasesComponent', () => {
  let component: DashReleasesComponent;
  let fixture: ComponentFixture<DashReleasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashReleasesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashReleasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
