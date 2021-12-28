import { TestBed } from '@angular/core/testing';

import { OrderFormDataService } from './order-form-data.service';

describe('OrderFormDataService', () => {
  let service: OrderFormDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderFormDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
