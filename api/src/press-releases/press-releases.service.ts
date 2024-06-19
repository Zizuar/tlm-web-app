import { BadRequestException, HttpException, Injectable } from '@nestjs/common';
import { CreatePressReleaseDto } from './dto/create-press-release.dto';
import { UpdatePressReleaseDto } from './dto/update-press-release.dto';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { PressRelease } from './schemas/press-release.schema';
import { Connection, Model } from 'mongoose';
import { validate } from 'class-validator';

@Injectable()
export class PressReleasesService {
  constructor(
    @InjectModel(PressRelease.name)
    private readonly pressReleaseModel: Model<PressRelease>,
    @InjectConnection() private readonly connection: Connection,
  ) {}

  async create(createPressReleaseDto: CreatePressReleaseDto): Promise<PressRelease | HttpException> {
    const session = await this.connection.startSession();
    session.startTransaction();
    try {
      const newPressRelease = new this.pressReleaseModel({
        ...createPressReleaseDto,
      });

      const errors = await validate(newPressRelease);
      if (errors.length > 0) {
        return new BadRequestException(errors, 'Invalid value(s) in request');
      }

      await newPressRelease.save();
      await session.commitTransaction();
      console.log('New press release added');
      return newPressRelease;
    } catch (error) {
      console.error(error);
      await session.abortTransaction();
      await session.endSession();
      throw error;
    }
  }

  async findAll(): Promise<PressRelease[]> {
    return await this.pressReleaseModel.find().exec();
  }

  async findOne(id: string): Promise<PressRelease> {
    return await this.pressReleaseModel.findById(id).exec();
  }

  async update(id: string, updatePressReleaseDto: UpdatePressReleaseDto): Promise<PressRelease> {
    const updatedPressRelease = { ...updatePressReleaseDto };

    const errors = await validate(updatedPressRelease);
    if (errors.length > 0) {
      throw new BadRequestException(errors, 'Invalid value(s) in request');
    }

    return await this.pressReleaseModel.findByIdAndUpdate(id, updatedPressRelease, { new: true }).exec();
  }

  async remove(id: string): Promise<PressRelease> {
    return await this.pressReleaseModel.findByIdAndDelete(id).exec();
  }
}
