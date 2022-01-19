import { Controller, Get, Body, Patch, Param, UseGuards } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { AuthGuard } from '@nestjs/passport';
import { PermissionsGuard } from '../authz/guards/permissions.guard';
import { Permissions } from '../authz/decorators/permissions.decorator';

@Controller({ path: 'schedule', version: '1' })
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}

  @Get()
  findAll() {
    return this.scheduleService.findAll();
  }

  @UseGuards(AuthGuard('jwt'), PermissionsGuard)
  @Patch(':id')
  @Permissions('write:schedule')
  update(
    @Param('id') id: string,
    @Body() updateScheduleDto: UpdateScheduleDto,
  ) {
    return this.scheduleService.update(id, { ...updateScheduleDto });
  }
}
