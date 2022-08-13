import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ReleasesService } from './releases.service';
import { CreateReleaseDto } from './dto/create-release.dto';
import { UpdateReleaseDto } from './dto/update-release.dto';
import { AuthGuard } from '@nestjs/passport';
import { PermissionsGuard } from '../authz/guards/permissions.guard';
import { Permissions } from '../authz/decorators/permissions.decorator';

@Controller({ path: 'releases', version: '1' })
export class ReleasesController {
  constructor(private readonly releasesService: ReleasesService) {}

  @UseGuards(AuthGuard('jwt'), PermissionsGuard)
  @Post()
  @Permissions('write:releases')
  create(@Body() createReleaseDto: CreateReleaseDto) {
    return this.releasesService.create(createReleaseDto);
  }

  @Get()
  findAll() {
    return this.releasesService.findAll();
  }

  @Get('press')
  findForPressPage() {
    return this.releasesService.findForPress();
  }

  @Get(':category')
  findByCategory(@Param('category') category: string) {
    return this.releasesService.findByCategory(category);
  }

  @Get(':category/:id')
  findOne(@Param('id') id: string) {
    return this.releasesService.findOne(id);
  }

  @UseGuards(AuthGuard('jwt'), PermissionsGuard)
  @Patch(':category/:id')
  @Permissions('write:releases')
  update(@Param('id') id: string, @Body() updateReleaseDto: UpdateReleaseDto) {
    return this.releasesService.update(id, updateReleaseDto);
  }

  @UseGuards(AuthGuard('jwt'), PermissionsGuard)
  @Delete(':category/:id')
  @Permissions('write:releases')
  remove(@Param('id') id: string) {
    return this.releasesService.remove(id);
  }
}
