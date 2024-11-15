import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateSubtemaDto } from './dto/create-subtema.dto';
import { UpdateSubtemaDto } from './dto/update-subtema.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Subtema } from './entities/subtema.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SubtemaService {
  constructor(
    @InjectRepository(Subtema)
    private readonly subtemaRepository: Repository<Subtema>,
  ) {}
  async create(createSubtemaDto: CreateSubtemaDto) {
    return await this.subtemaRepository.save(createSubtemaDto);
  }

  async findAll() {
    return await this.subtemaRepository.find();
  }

  async findOne(id: number) {
    const subtema = await this.subtemaRepository.findOneBy({ id });
    if (!subtema) {
      throw new BadRequestException('no se encontro el subtema');
    }
    return subtema;
  }

  async update(id: number, updateSubtemaDto: UpdateSubtemaDto) {
    const subtema = await this.findOne(id);
    if (!subtema) {
      throw new BadRequestException('no se encontro el subtema');
    }
    return await this.subtemaRepository.update(id, updateSubtemaDto);
  }

  async remove(id: number) {
    return await this.subtemaRepository.softDelete(id);
  }
}
