import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotImplementedException,
} from '@nestjs/common';
import { PressReleasesService } from './press-releases.service';
import { CreatePressReleaseDto } from './dto/create-press-release.dto';
import { UpdatePressReleaseDto } from './dto/update-press-release.dto';

@Controller({ path: 'press-releases', version: '1' })
export class PressReleasesController {
  constructor(private readonly pressReleasesService: PressReleasesService) {}

  @Post()
  create(@Body() createPressReleaseDto: CreatePressReleaseDto) {
    return new NotImplementedException();
    // return this.pressReleasesService.create(createPressReleaseDto);
  }

  @Get()
  findAll() {
    return this.pressReleasesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pressReleasesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePressReleaseDto: UpdatePressReleaseDto,
  ) {
    return new NotImplementedException();
    // return this.pressReleasesService.update(+id, updatePressReleaseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return new NotImplementedException();
    // return this.pressReleasesService.remove(+id);
  }
}
