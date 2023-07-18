import { Injectable } from '@nestjs/common';
import { CreatePassagemDto } from './dto/create-passagem.dto';
import { UpdatePassagemDto } from './dto/update-passagem.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Passagem } from './entities/passagem.entity';
import { QueryPassagemDto } from './dto/query-passagem.dto';
import { PaginationDto } from './dto/pagination.dto';
import { OrcamentoDto } from './dto/passagem.dto';

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

  async findMinAndMaxPrecoIda() {
    const [minResult, maxResult] = await Promise.all([
      this.repository
        .createQueryBuilder('passagem')
        .where('precoIda > 0')
        .select('MIN(passagem.precoIda)', 'min')
        .getRawOne(),
      this.repository
        .createQueryBuilder('passagem')
        .select('MAX(passagem.precoIda)', 'max')
        .getRawOne(),
    ]);

    return { min: minResult.min, max: maxResult.max };
  }

  async search(queryParams: QueryPassagemDto) {
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

    if (queryParams.companhiasId && queryParams.companhiasId.length) {
      const idsArray: number[] = queryParams.companhiasId
        .split(',')
        .map((id) => Number(id));
      query.andWhere('companhia.id IN (:...ids)', { ids: idsArray });
    }

    query.limit(queryParams.porPagina);
    const porPagina = queryParams.porPagina;
    const pagina = queryParams.pagina;
    const offset = (pagina - 1) * porPagina;
    query.offset(offset);
    query.setParameters(queryParams);

    const range = await this.findMinAndMaxPrecoIda();

    // Executar a consulta para obter os resultados
    return query.getManyAndCount().then(([result, total]) => {
      const ultimaPagina = Math.ceil(total / porPagina);
      const paginaAtual = queryParams.pagina;

      const paginationDto: PaginationDto = {
        paginaAtual,
        ultimaPagina,
        total,
        precoMin: range.min,
        precoMax: range.max,
        resultado: result.map((passagem) => {
          let totalPassagens = 0;
          const orcamento: OrcamentoDto[] = [];

          if (queryParams.passageirosAdultos > 0) {
            const ida = passagem.precoIda * queryParams.passageirosAdultos;
            const volta = queryParams.somenteIda
              ? 0
              : passagem.precoVolta * queryParams.passageirosAdultos;

            const preco = ida + volta;

            totalPassagens += preco + passagem.taxaEmbarque;

            const detalhes: OrcamentoDto = {
              descricao: `${queryParams.passageirosAdultos} adulto${
                queryParams.passageirosAdultos > 1 ? 's' : ''
              }, ${passagem.tipo.toLowerCase()}`,
              preco,
              taxaEmbarque: passagem.taxaEmbarque,
              total: preco + passagem.taxaEmbarque,
            };
            orcamento.push(detalhes);
          }
          if (queryParams.passageirosCriancas > 0) {
            const ida = passagem.precoIda * queryParams.passageirosCriancas;
            const volta = queryParams.somenteIda
              ? 0
              : passagem.precoVolta * queryParams.passageirosCriancas;

            const preco = ida + volta;

            totalPassagens += preco + passagem.taxaEmbarque;

            const detalhes: OrcamentoDto = {
              descricao: `${queryParams.passageirosCriancas} criança${
                queryParams.passageirosCriancas > 1 ? 's' : ''
              }, ${passagem.tipo.toLowerCase()}`,
              preco,
              taxaEmbarque: passagem.taxaEmbarque,
              total: preco + passagem.taxaEmbarque,
            };
            orcamento.push(detalhes);
          }
          if (queryParams.passageirosBebes > 0) {
            const ida = passagem.precoIda * queryParams.passageirosBebes;
            const volta = queryParams.somenteIda
              ? 0
              : passagem.precoVolta * queryParams.passageirosBebes;

            const preco = ida + volta;

            totalPassagens += preco + passagem.taxaEmbarque;

            const detalhes: OrcamentoDto = {
              descricao: `${queryParams.passageirosBebes} bebê${
                queryParams.passageirosBebes > 1 ? 's' : ''
              }, ${passagem.tipo.toLowerCase()}`,
              preco,
              taxaEmbarque: passagem.taxaEmbarque,
              total: preco + passagem.taxaEmbarque,
            };
            orcamento.push(detalhes);
          }
          return {
            ...passagem,
            dataIda: new Date(queryParams.dataIda),
            dataVolta: queryParams.dataVolta
              ? new Date(queryParams.dataVolta)
              : null,
            orcamento,
            total: totalPassagens,
          };
        }),
      };

      return paginationDto;
    });
  }
}
