import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateTemaDto } from './dto/create-tema.dto';
import { UpdateTemaDto } from './dto/update-tema.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Tema } from './entities/tema.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TemaService {
  constructor(
    @InjectRepository(Tema)
    private readonly temarepository: Repository<Tema>,
  ) {}
  async create(createTemaDto: CreateTemaDto) {
    return await this.temarepository.save(createTemaDto);
  }

  async findAll() {
    const temas = await this.temarepository.find();
    if (!temas) {
      throw new BadRequestException('No hay temas');
    }
    return temas;
  }

  async findOne(id: number) {
    const tema = await this.temarepository.findOneBy({ id });
    if (!tema) {
      throw new BadRequestException('No se encontro el tema');
    }
    return tema;
  }

  async update(id: number, updateTemaDto: UpdateTemaDto) {
    return await this.temarepository.update(id, updateTemaDto);
  }

  async remove(id: number) {
    return await this.temarepository.softDelete(id);
  }
}
