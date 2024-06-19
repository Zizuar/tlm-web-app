import { BadRequestException, HttpException, Injectable } from '@nestjs/common';
import { CreateReleaseDto } from './dto/create-release.dto';
import { UpdateReleaseDto } from './dto/update-release.dto';
import { Release, ReleaseDocument } from './schemas/release.schema';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { validate } from 'class-validator';

@Injectable()
export class ReleasesService {
  constructor(
    @InjectModel(Release.name)
    private readonly releaseModel: Model<ReleaseDocument>,
    @InjectConnection() private readonly connection: Connection,
  ) {}

  async create(createReleaseDto: CreateReleaseDto): Promise<Release | HttpException> {
    const session = await this.connection.startSession();
    session.startTransaction();
    try {
      const newRelease = new this.releaseModel({
        ...createReleaseDto,
      });

      const errors = await validate(newRelease);
      if (errors.length > 0) {
        return new BadRequestException(errors, 'Invalid value(s) in request');
      }

      await newRelease.save();
      await session.commitTransaction();
      console.log('New releases added');
      return newRelease;
    } catch (error) {
      console.error(error);
      await session.abortTransaction();
      await session.endSession();
      throw error;
    }
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

  async update(id: string, updateReleaseDto: UpdateReleaseDto): Promise<Release> {
    const updatedRelease = { ...updateReleaseDto };

    const errors = await validate(updatedRelease);
    if (errors.length > 0) {
      throw new BadRequestException(errors, 'Invalid value(s) in request');
    }

    return await this.releaseModel.findByIdAndUpdate(id, updatedRelease, { new: true }).exec();
  }

  async remove(id: string) {
    return await this.releaseModel.findByIdAndDelete(id).exec();
  }
}
