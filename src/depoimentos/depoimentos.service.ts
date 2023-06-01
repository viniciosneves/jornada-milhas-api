import { Injectable } from '@nestjs/common';
import { CreateDepoimentoDto } from './dto/create-depoimento.dto';
import { UpdateDepoimentoDto } from './dto/update-depoimento.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Depoimento } from './entities/depoimento.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DepoimentosService {
  constructor(
    @InjectRepository(Depoimento)
    private repository: Repository<Depoimento>,
  ) {}

  create(createDepoimentoDto: CreateDepoimentoDto) {
    return this.repository.save(createDepoimentoDto);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOneBy({ id });
  }

  update(id: number, updateDepoimentoDto: UpdateDepoimentoDto) {
    return this.repository.update(id, updateDepoimentoDto);
  }

  remove(id: number) {
    return this.repository.delete(id);
  }
}
