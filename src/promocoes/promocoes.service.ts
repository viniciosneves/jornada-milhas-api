import { Injectable } from '@nestjs/common';
import { CreatePromocoeDto } from './dto/create-promocoe.dto';
import { UpdatePromocoeDto } from './dto/update-promocoe.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Promocao } from './entities/promocao.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PromocoesService {
  constructor(
    @InjectRepository(Promocao)
    private repository: Repository<Promocao>,
  ) {}

  create(createPromocoeDto: CreatePromocoeDto) {
    return this.repository.save(createPromocoeDto);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOneBy({ id });
  }

  update(id: number, updatePromocoeDto: UpdatePromocoeDto) {
    return this.repository.update(id, updatePromocoeDto);
  }

  remove(id: number) {
    return this.repository.delete(id);
  }
}
