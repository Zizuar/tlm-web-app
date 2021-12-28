import { TestBed } from '@angular/core/testing';

import { PressResolver } from './press.resolver';

describe('PressResolver', () => {
  let resolver: PressResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(PressResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
