import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateVenueDto } from './dto/create-venue.dto';
import { UpdateVenueDto } from './dto/update-venue.dto';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Venue, VenueDocument } from './schemas/venue.schema';
import { Connection, Model } from 'mongoose';
import { validate } from 'class-validator';

@Injectable()
export class VenuesService {
  constructor(
    @InjectModel(Venue.name) private readonly venueModel: Model<VenueDocument>,
    @InjectConnection() private readonly connection: Connection,
  ) {}

  async create(createVenueDto: CreateVenueDto): Promise<Venue | BadRequestException> {
    const session = await this.connection.startSession();
    session.startTransaction();
    try {
      const newVenue = new this.venueModel(createVenueDto);

      const errors = await validate(newVenue);
      if (errors.length > 0) {
        throw new BadRequestException(errors, 'Invalid value(s) in request');
      }

      await newVenue.save();
      await session.commitTransaction();
      return newVenue;
    } catch (error) {
      await session.abortTransaction();
      await session.endSession();
      throw error;
    }
  }

  async findAll(): Promise<Venue[]> {
    return await this.venueModel.find().exec();
  }

  async findOne(id: string): Promise<Venue> {
    return await this.venueModel.findById(id).exec();
  }

  async update(id: string, updateVenueDto: UpdateVenueDto): Promise<Venue> {
    const updatedVenue = updateVenueDto;

    const errors = await validate(updatedVenue);
    if (errors.length > 0) {
      throw new BadRequestException(errors, 'Invalid value(s) in request');
    }

    return await this.venueModel.findByIdAndUpdate(id, updatedVenue, { new: true }).exec();
  }

  async remove(id: string): Promise<Venue> {
    return await this.venueModel.findByIdAndDelete(id).exec();
  }
}
