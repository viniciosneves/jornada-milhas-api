import { ApiProperty } from '@nestjs/swagger';
import { TipoPassagem } from '../entities/passagem.entity';

export class QueryPassagemDto {
  @ApiProperty({
    description: 'Buscar somente ida?',
    default: false,
    required: false,
  })
  somenteIda?: boolean;

  @ApiProperty({
    description: 'Quantidade de passageiros adultos',
    default: 1,
    required: false,
  })
  passageirosAdultos?: number;

  @ApiProperty({
    description: 'Quantidade de passageiros crianças',
    default: 0,
    required: false,
  })
  passageirosCriancas?: number;

  @ApiProperty({
    description: 'Quantidade de passageiros bebês',
    default: 0,
    required: false,
  })
  passageirosBebes?: number;

  @ApiProperty({
    description: 'Tipo da passagem',
    enum: ['Executiva', 'Econômica'],
    required: false,
  })
  tipo?: TipoPassagem;

  @ApiProperty({
    description: 'Turno para realizar o voo',
    enum: ['Manhã', 'Tarde', 'Noite'],
    required: false,
  })
  turno?: string;

  @ApiProperty({
    description: 'Id do estado de onde o passageiro vai sair',
    required: false,
  })
  origemId?: number;

  @ApiProperty({
    description: 'Filtrar por companhias (ids separados por virgula)',
    required: false,
  })
  companhiasId?: string;

  @ApiProperty({
    description: 'Id do estado de onde o passageiro vai chegar',
    required: false,
  })
  destinoId?: number;

  @ApiProperty({
    description: 'Valor mínimo da passagem',
    required: false,
  })
  precoMin?: number;

  @ApiProperty({
    description: 'Valor máximo da passagem',
    required: false,
  })
  precoMax?: number;

  @ApiProperty({
    description: 'Quantidade de conexões desejadas',
    required: false,
  })
  conexoes?: number;

  @ApiProperty({
    description: 'Tempo de voo máximo',
    required: false,
  })
  tempoVoo?: number;

  @ApiProperty({
    description: 'Data da ida',
  })
  dataIda: string;

  @ApiProperty({
    description: 'Data da volta',
    required: false,
  })
  dataVolta?: string;

  @ApiProperty({
    description: 'Número da página desejada',
    default: 1,
    required: false,
  })
  pagina: number;

  @ApiProperty({
    description: 'Número de passagens por página desejado',
    required: true,
  })
  porPagina: number;
}
