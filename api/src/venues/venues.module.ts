import { Module } from '@nestjs/common';
import { VenuesService } from './venues.service';
import { VenuesController } from './venues.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Venue, VenueSchema } from './schemas/venue.schema';

@Module({
  controllers: [VenuesController],
  providers: [VenuesService],
  imports: [MongooseModule.forFeature([{ name: Venue.name, schema: VenueSchema }])],
})
export class VenuesModule {}
