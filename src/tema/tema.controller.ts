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
import { TemaService } from './tema.service';
import { CreateTemaDto } from './dto/create-tema.dto';
import { UpdateTemaDto } from './dto/update-tema.dto';
import { FirebaseAuthGuard } from 'src/auth/firebase-auth.guard';
import { ActiveUser } from 'src/common/decorator/activeuser.decorator';
import { UserActiveInterface } from 'src/common/interfaces/useractive.interface';

@Controller('tema')
export class TemaController {
  constructor(private readonly temaService: TemaService) {}

  @UseGuards(FirebaseAuthGuard)
  @Post()
  create(
    @Body() createTemaDto: CreateTemaDto,
    @ActiveUser() user: UserActiveInterface,
  ) {
    return this.temaService.create(createTemaDto, user);
  }

  @Get()
  findAll() {
    return this.temaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.temaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTemaDto: UpdateTemaDto) {
    return this.temaService.update(+id, updateTemaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.temaService.remove(+id);
  }
}
