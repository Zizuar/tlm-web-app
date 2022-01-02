import { Test, TestingModule } from '@nestjs/testing';
import { PressReleasesController } from './press-releases.controller';
import { PressReleasesService } from './press-releases.service';

describe('PressReleasesController', () => {
  let controller: PressReleasesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PressReleasesController],
      providers: [PressReleasesService],
    }).compile();

    controller = module.get<PressReleasesController>(PressReleasesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
