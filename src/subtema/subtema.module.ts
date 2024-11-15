import { Module } from '@nestjs/common';
import { SubtemaService } from './subtema.service';
import { SubtemaController } from './subtema.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subtema } from './entities/subtema.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Subtema])],
  controllers: [SubtemaController],
  providers: [SubtemaService],
})
export class SubtemaModule {}
