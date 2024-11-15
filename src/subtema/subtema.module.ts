import { Module } from '@nestjs/common';
import { SubtemaService } from './subtema.service';
import { SubtemaController } from './subtema.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subtema } from './entities/subtema.entity';
import { AuthModule } from 'src/auth/auth.module';
import { Tema } from 'src/tema/entities/tema.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Subtema, Tema]), AuthModule],
  controllers: [SubtemaController],
  providers: [SubtemaService],
})
export class SubtemaModule {}
