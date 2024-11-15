import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateSubtemaDto } from './dto/create-subtema.dto';
import { UpdateSubtemaDto } from './dto/update-subtema.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Subtema } from './entities/subtema.entity';
import { Repository } from 'typeorm';
import { Tema } from 'src/tema/entities/tema.entity';

@Injectable()
export class SubtemaService {
  constructor(
    @InjectRepository(Subtema)
    private readonly subtemaRepository: Repository<Subtema>,
    @InjectRepository(Tema)
    private readonly temaRepository: Repository<Tema>,
  ) {}
  async create(createSubtemaDto: CreateSubtemaDto) {
    const { temaId, subtema } = createSubtemaDto;
    const tema = await this.temaRepository.findOne({ where: { id: temaId } });
    if (!tema) {
      throw new NotFoundException(`No se encontro el tema con id ${temaId}`);
    }

    const newsubtema = this.subtemaRepository.create({
      subtema,
      temaId,
    });
    return await this.subtemaRepository.save(newsubtema);
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
