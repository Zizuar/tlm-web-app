import { Injectable } from '@nestjs/common';
import { CreatePressReleaseDto } from './dto/create-press-release.dto';
import { UpdatePressReleaseDto } from './dto/update-press-release.dto';

@Injectable()
export class PressReleasesService {
  create(createPressReleaseDto: CreatePressReleaseDto) {
    return 'This action adds a new pressRelease';
  }

  findAll() {
    return `This action returns all pressReleases`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pressRelease`;
  }

  update(id: number, updatePressReleaseDto: UpdatePressReleaseDto) {
    return `This action updates a #${id} pressRelease`;
  }

  remove(id: number) {
    return `This action removes a #${id} pressRelease`;
  }
}
