import { Injectable } from '@nestjs/common';
import { CreateReleaseDto } from './dto/create-release.dto';
import { UpdateReleaseDto } from './dto/update-release.dto';
import { Release, ReleaseDocument } from './schemas/release.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ReleasesService {
  constructor(
    @InjectModel(Release.name)
    private readonly releaseModel: Model<ReleaseDocument>,
  ) {}

  create(createReleaseDto: CreateReleaseDto) {
    return 'This action adds a new release';
  }

  async findAll(): Promise<Release[]> {
    return await this.releaseModel.find().exec();
  }

  async findForPress(): Promise<Release[]> {
    return await this.releaseModel.find({ onPressPage: true }).exec();
  }

  async findByCategory(category: string): Promise<Release[]> {
    return await this.releaseModel.find({ category: category }).exec();
  }

  async findOne(id: string): Promise<Release> {
    return await this.releaseModel.findOne({ id: id }).exec();
  }

  update(id: number, updateReleaseDto: UpdateReleaseDto) {
    return `This action updates a #${id} release`;
  }

  remove(id: number) {
    return `This action removes a #${id} release`;
  }
}
