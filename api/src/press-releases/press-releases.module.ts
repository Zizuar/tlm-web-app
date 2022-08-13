import { Module } from '@nestjs/common';
import { PressReleasesService } from './press-releases.service';
import { PressReleasesController } from './press-releases.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PressRelease, PressReleaseSchema } from './schemas/press-release.schema';

@Module({
  controllers: [PressReleasesController],
  providers: [PressReleasesService],
  imports: [MongooseModule.forFeature([{ name: PressRelease.name, schema: PressReleaseSchema }])],
})
export class PressReleasesModule {}
