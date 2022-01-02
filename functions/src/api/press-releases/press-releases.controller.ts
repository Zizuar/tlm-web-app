import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PressReleasesService } from './press-releases.service';
import { CreatePressReleaseDto } from './dto/create-press-release.dto';
import { UpdatePressReleaseDto } from './dto/update-press-release.dto';

@Controller('press-releases')
export class PressReleasesController {
  constructor(private readonly pressReleasesService: PressReleasesService) {}

  @Post()
  create(@Body() createPressReleaseDto: CreatePressReleaseDto) {
    return this.pressReleasesService.create(createPressReleaseDto);
  }

  @Get()
  findAll() {
    return this.pressReleasesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pressReleasesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePressReleaseDto: UpdatePressReleaseDto,
  ) {
    return this.pressReleasesService.update(+id, updatePressReleaseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pressReleasesService.remove(+id);
  }
}
