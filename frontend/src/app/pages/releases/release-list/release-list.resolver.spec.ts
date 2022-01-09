import { TestBed } from '@angular/core/testing';

import { ReleaseListResolver } from './release-list.resolver';

describe('ReleaseListResolver', () => {
  let resolver: ReleaseListResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ReleaseListResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
