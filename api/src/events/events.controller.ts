import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotImplementedException,
  UseGuards,
} from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { AuthGuard } from '@nestjs/passport';
import { Permissions } from '../authz/decorators/permissions.decorator';
import { PermissionsGuard } from '../authz/guards/permissions.guard';

@Controller({ path: 'events', version: '1' })
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @UseGuards(AuthGuard('jwt'), PermissionsGuard)
  @Post()
  @Permissions('write:events')
  create(@Body() createEventDto: CreateEventDto) {
    throw new NotImplementedException();
    // return this.eventsService.create(createEventDto);
  }

  @Get()
  findAll() {
    return this.eventsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    throw new NotImplementedException();
    // return this.eventsService.findOne(+id);
  }

  @UseGuards(AuthGuard('jwt'), PermissionsGuard)
  @Patch(':id')
  @Permissions('write:events')
  update(@Param('id') id: string, @Body() updateEventDto: UpdateEventDto) {
    throw new NotImplementedException();
    // return this.eventsService.update(+id, updateEventDto);
  }

  @UseGuards(AuthGuard('jwt'), PermissionsGuard)
  @Delete(':id')
  @Permissions('write:events')
  remove(@Param('id') id: string) {
    throw new NotImplementedException();
    // return this.eventsService.remove(+id);
  }
}
