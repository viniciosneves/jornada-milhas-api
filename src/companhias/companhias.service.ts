import { Injectable } from '@nestjs/common';
import { CreateCompanhiaDto } from './dto/create-companhia.dto';
import { UpdateCompanhiaDto } from './dto/update-companhia.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Companhia } from './entities/companhia.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CompanhiasService {
  constructor(
    @InjectRepository(Companhia)
    private repository: Repository<Companhia>,
  ) {}

  create(createCompanhiaDto: CreateCompanhiaDto) {
    return this.repository.save(createCompanhiaDto);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOneBy({ id });
  }

  update(id: number, updateCompanhiaDto: UpdateCompanhiaDto) {
    return this.repository.update(id, updateCompanhiaDto);
  }

  remove(id: number) {
    return this.repository.delete(id);
  }
}
