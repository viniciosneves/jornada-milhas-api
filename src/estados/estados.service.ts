import { Injectable } from '@nestjs/common';
import { CreateEstadoDto } from './dto/create-estado.dto';
import { UpdateEstadoDto } from './dto/update-estado.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Estado } from './entities/estado.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EstadosService {
  constructor(
    @InjectRepository(Estado)
    private repository: Repository<Estado>,
  ) {}

  create(createEstadoDto: CreateEstadoDto) {
    return this.repository.save(createEstadoDto);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOneBy({ id });
  }

  update(id: number, updateEstadoDto: UpdateEstadoDto) {
    return this.repository.update(id, updateEstadoDto);
  }

  remove(id: number) {
    return this.repository.delete(id);
  }
}
