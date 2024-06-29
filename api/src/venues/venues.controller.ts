import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { VenuesService } from './venues.service';
import { CreateVenueDto } from './dto/create-venue.dto';
import { UpdateVenueDto } from './dto/update-venue.dto';
import { AuthGuard } from '@nestjs/passport';
import { Permissions } from '../authz/decorators/permissions.decorator';
import { PermissionsGuard } from '../authz/guards/permissions.guard';

@Controller({ path: 'venues', version: '1' })
export class VenuesController {
  constructor(private readonly venuesService: VenuesService) {}

  @UseGuards(AuthGuard('jwt'), PermissionsGuard)
  @Post()
  @Permissions('write:venues')
  create(@Body() createVenueDto: CreateVenueDto) {
    return this.venuesService.create(createVenueDto);
  }

  @UseGuards(AuthGuard('jwt'), PermissionsGuard)
  @Get()
  @Permissions('read:venues')
  findAll() {
    return this.venuesService.findAll();
  }

  @UseGuards(AuthGuard('jwt'), PermissionsGuard)
  @Get(':id')
  @Permissions('read:venues')
  findOne(@Param('id') id: string) {
    return this.venuesService.findOne(id);
  }

  @UseGuards(AuthGuard('jwt'), PermissionsGuard)
  @Patch(':id')
  @Permissions('write:venues')
  update(@Param('id') id: string, @Body() updateVenueDto: UpdateVenueDto) {
    return this.venuesService.update(id, updateVenueDto);
  }

  @UseGuards(AuthGuard('jwt'), PermissionsGuard)
  @Delete(':id')
  @Permissions('write:venues')
  remove(@Param('id') id: string) {
    return this.venuesService.remove(id);
  }
}
