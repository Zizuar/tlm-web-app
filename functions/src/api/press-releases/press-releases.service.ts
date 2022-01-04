import { Injectable } from '@nestjs/common';
import { CreatePressReleaseDto } from './dto/create-press-release.dto';
import { UpdatePressReleaseDto } from './dto/update-press-release.dto';
import { InjectModel } from '@nestjs/mongoose';
import { PressRelease } from './schemas/press-release.schema';
import { Model } from 'mongoose';

@Injectable()
export class PressReleasesService {
  constructor(
    @InjectModel(PressRelease.name)
    private readonly pressReleaseModel: Model<PressRelease>,
  ) {}

  create(createPressReleaseDto: CreatePressReleaseDto) {
    return 'This action adds a new pressRelease';
  }

  async findAll(): Promise<PressRelease[]> {
    return await this.pressReleaseModel.find().exec();
  }

  async findOne(id: string): Promise<PressRelease> {
    return await this.pressReleaseModel.findById(id).exec();
  }

  update(id: number, updatePressReleaseDto: UpdatePressReleaseDto) {
    return `This action updates a #${id} pressRelease`;
  }

  remove(id: number) {
    return `This action removes a #${id} pressRelease`;
  }
}
