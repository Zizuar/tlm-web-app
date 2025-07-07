import { BadRequestException, HttpException, Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { Event, EventDocument } from './schemas/event.schema';
import { validate } from 'class-validator';

@Injectable()
export class EventsService {
  constructor(
    @InjectModel(Event.name) private readonly eventModel: Model<EventDocument>,
    @InjectConnection() private readonly connection: Connection,
  ) {}

  async create(createEventDto: CreateEventDto): Promise<Event | HttpException> {
    const session = await this.connection.startSession();
    session.startTransaction();
    try {
      const newEvent = new this.eventModel({
        ...createEventDto,
        timezone: createEventDto.timezone ?? 'America/New_York',
      });

      const errors = await validate(newEvent);
      if (errors.length > 0) {
        return new BadRequestException(errors, 'Invalid value(s) in request');
      }

      await newEvent.save();
      await session.commitTransaction();
      return newEvent;
    } catch (error) {
      await session.abortTransaction();
      await session.endSession();
      throw error;
    }
  }

  async findAll(): Promise<Event[]> {
    return await this.eventModel.find().exec();
  }

  /**
   * Find all events that are either in the future, ended less than 12 hours ago, or started less than 12 hours ago.
   */
  async findFuture(): Promise<Event[]> {
    const twelveHoursAgo = new Date(Date.now() - 12 * 60 * 60 * 1000);

    return await this.eventModel
      .find({
        $or: [{ endDate: { $exists: true, $gte: twelveHoursAgo } }, { date: { $gte: twelveHoursAgo } }],
      })
      .exec();
  }

  async findOne(id: string): Promise<Event> {
    return await this.eventModel.findById(id).exec();
  }

  async update(id: string, updateEventDto: UpdateEventDto): Promise<Event> {
    const updatedEvent = {
      ...updateEventDto,
      timezone: updateEventDto.timezone ?? 'America/New_York',
    };

    const errors = await validate(updatedEvent);
    if (errors.length > 0) {
      throw new BadRequestException(errors, 'Invalid value(s) in request');
    }

    return await this.eventModel.findByIdAndUpdate(id, updatedEvent, { new: true }).exec();
  }

  async remove(id: string): Promise<Event> {
    return await this.eventModel.findByIdAndDelete(id).exec();
  }
}
