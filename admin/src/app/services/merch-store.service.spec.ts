import { TestBed } from '@angular/core/testing';

import { MerchStoreService } from './merch-store.service';

describe('MerchStoreService', () => {
  let service: MerchStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MerchStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
