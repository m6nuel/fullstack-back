import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { SubtemaService } from './subtema.service';
import { CreateSubtemaDto } from './dto/create-subtema.dto';
import { UpdateSubtemaDto } from './dto/update-subtema.dto';
import { FirebaseAuthGuard } from 'src/auth/firebase-auth.guard';

@Controller('subtema')
export class SubtemaController {
  constructor(private readonly subtemaService: SubtemaService) {}

  @UseGuards(FirebaseAuthGuard)
  @Post()
  create(@Body() createSubtemaDto: CreateSubtemaDto) {
    return this.subtemaService.create(createSubtemaDto);
  }

  @Get()
  findAll() {
    return this.subtemaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subtemaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSubtemaDto: UpdateSubtemaDto) {
    return this.subtemaService.update(+id, updateSubtemaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subtemaService.remove(+id);
  }
}
