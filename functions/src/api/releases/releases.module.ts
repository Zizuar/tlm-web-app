import { Module } from '@nestjs/common';
import { ReleasesService } from './releases.service';
import { ReleasesController } from './releases.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Release, ReleaseSchema } from './schemas/release.schema';

@Module({
  controllers: [ReleasesController],
  providers: [ReleasesService],
  imports: [
    MongooseModule.forFeature([{ name: Release.name, schema: ReleaseSchema }]),
  ],
})
export class ReleasesModule {}
