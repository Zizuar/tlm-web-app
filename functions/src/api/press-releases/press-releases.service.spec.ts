import { Test, TestingModule } from '@nestjs/testing';
import { PressReleasesService } from './press-releases.service';

describe('PressReleasesService', () => {
  let service: PressReleasesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PressReleasesService],
    }).compile();

    service = module.get<PressReleasesService>(PressReleasesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
