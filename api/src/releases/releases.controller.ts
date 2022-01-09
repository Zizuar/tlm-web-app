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
import { ReleasesService } from './releases.service';
import { CreateReleaseDto } from './dto/create-release.dto';
import { UpdateReleaseDto } from './dto/update-release.dto';

@Controller({ path: 'releases', version: '1' })
export class ReleasesController {
  constructor(private readonly releasesService: ReleasesService) {}

  @Post()
  create(@Body() createReleaseDto: CreateReleaseDto) {
    throw new NotImplementedException();
    // return this.releasesService.create(createReleaseDto);
  }

  @Get()
  findAll() {
    return this.releasesService.findAll();
  }

  @Get('press')
  findForPressPage() {
    return this.releasesService.findForPress();
    // return this.releasesService.findOne(+id);
  }

  @Get(':category')
  findByCategory(@Param('category') category: string) {
    return this.releasesService.findByCategory(category);
  }

  @Get(':category/:id')
  findOne(@Param('id') id: string) {
    return this.releasesService.findOne(id);
  }

  @Patch(':category/:id')
  update(@Param('id') id: string, @Body() updateReleaseDto: UpdateReleaseDto) {
    throw new NotImplementedException();
    // return this.releasesService.update(+id, updateReleaseDto);
  }

  @Delete(':category/:id')
  remove(@Param('id') id: string) {
    throw new NotImplementedException();
    // return this.releasesService.remove(+id);
  }
}
