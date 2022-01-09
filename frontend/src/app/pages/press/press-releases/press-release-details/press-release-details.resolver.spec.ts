import { TestBed } from '@angular/core/testing';

import { PressReleaseDetailsResolver } from './press-release-details.resolver';

describe('PressReleaseDetailsResolver', () => {
  let resolver: PressReleaseDetailsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(PressReleaseDetailsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
