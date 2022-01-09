import { TestBed } from '@angular/core/testing';

import { ReleaseDetailsResolver } from './release-details.resolver';

describe('ReleaseDetailsResolver', () => {
  let resolver: ReleaseDetailsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ReleaseDetailsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
