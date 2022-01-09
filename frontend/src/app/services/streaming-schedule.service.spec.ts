import { TestBed } from '@angular/core/testing';

import { StreamingScheduleService } from './streaming-schedule.service';

describe('StreamingScheduleService', () => {
  let service: StreamingScheduleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StreamingScheduleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
