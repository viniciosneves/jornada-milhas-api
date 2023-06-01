import { Injectable } from '@nestjs/common';
import { CreatePassagemDto } from './dto/create-passagem.dto';
import { UpdatePassagemDto } from './dto/update-passagem.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Passagem } from './entities/passagem.entity';
import { QueryPassagemDto } from './dto/query-passagem.dto';
import { PaginationDto } from './dto/pagination.dto';

@Injectable()
export class PassagemService {
  constructor(
    @InjectRepository(Passagem)
    private repository: Repository<Passagem>,
  ) {}

  create(createPassagemDto: CreatePassagemDto) {
    return this.repository.save(createPassagemDto);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOneBy({ id });
  }

  update(id: number, updatePassagemDto: UpdatePassagemDto) {
    return this.repository.update(id, updatePassagemDto);
  }

  remove(id: number) {
    return this.repository.delete(id);
  }

  search(queryParams: QueryPassagemDto) {
    const query = this.repository.createQueryBuilder('passagem');
    query.leftJoinAndSelect('passagem.origem', 'origem');
    query.leftJoinAndSelect('passagem.destino', 'destino');
    query.leftJoinAndSelect('passagem.companhia', 'companhia');

    query.where('passagem.id > 0');

    if (queryParams.tipo) {
      query.andWhere('passagem.tipo = :tipo');
    }

    if (queryParams.origemId) {
      query.andWhere('passagem.origemId = :origemId');
    }

    if (queryParams.destinoId) {
      query.andWhere('passagem.destinoId = :destinoId');
    }

    if (queryParams.precoMin) {
      query.andWhere('passagem.precoIda >= :precoMin');
    }

    if (queryParams.precoMax) {
      query.andWhere('passagem.precoIda <= :precoMax');
    }

    if (queryParams.conexoes >= 0) {
      const conexoesAndWhere =
        queryParams.conexoes > 2
          ? '(passagem.conexoes >= :conexoes)'
          : '(passagem.conexoes = :conexoes)';
      query.andWhere(conexoesAndWhere);
    }

    query.limit(queryParams.porPagina);
    const porPagina = queryParams.porPagina;
    const pagina = queryParams.pagina;
    const offset = (pagina - 1) * porPagina;
    query.offset(offset);
    query.setParameters(queryParams);

    // Executar a consulta para obter os resultados
    return query.getManyAndCount().then(([result, total]) => {
      const ultimaPagina = Math.ceil(total / porPagina);
      const paginaAtual = Math.min(pagina, ultimaPagina);

      const paginationDto: PaginationDto = {
        paginaAtual,
        ultimaPagina,
        total,
        resultado: result.map((passagem) => {
          return {
            ...passagem,
            dataIda: new Date(queryParams.dataIda),
            dataVolta: queryParams.dataVolta
              ? new Date(queryParams.dataVolta)
              : null,
          };
        }),
      };

      return paginationDto;
    });
  }
}
