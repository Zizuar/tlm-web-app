import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { PressReleasesService } from './press-releases.service';
import { CreatePressReleaseDto } from './dto/create-press-release.dto';
import { UpdatePressReleaseDto } from './dto/update-press-release.dto';
import { AuthGuard } from '@nestjs/passport';
import { PermissionsGuard } from '../authz/guards/permissions.guard';
import { Permissions } from '../authz/decorators/permissions.decorator';

@Controller({ path: 'press-releases', version: '1' })
export class PressReleasesController {
  constructor(private readonly pressReleasesService: PressReleasesService) {}

  @UseGuards(AuthGuard('jwt'), PermissionsGuard)
  @Post()
  @Permissions('write:press')
  create(@Body() createPressReleaseDto: CreatePressReleaseDto) {
    return this.pressReleasesService.create(createPressReleaseDto);
  }

  @Get()
  findAll() {
    return this.pressReleasesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pressReleasesService.findOne(id);
  }

  @UseGuards(AuthGuard('jwt'), PermissionsGuard)
  @Patch(':id')
  @Permissions('write:press')
  update(@Param('id') id: string, @Body() updatePressReleaseDto: UpdatePressReleaseDto) {
    return this.pressReleasesService.update(id, updatePressReleaseDto);
  }

  @UseGuards(AuthGuard('jwt'), PermissionsGuard)
  @Delete(':id')
  @Permissions('write:press')
  remove(@Param('id') id: string) {
    return this.pressReleasesService.remove(id);
  }
}
