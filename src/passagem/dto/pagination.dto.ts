import { ApiProperty } from '@nestjs/swagger';
import { PassagemDto } from './passagem.dto';

export class PaginationDto {
  @ApiProperty()
  paginaAtual: number;
  @ApiProperty()
  ultimaPagina: number;
  @ApiProperty()
  total: number;
  @ApiProperty()
  precoMin: number;
  @ApiProperty()
  precoMax: number;
  @ApiProperty({ type: [PassagemDto] })
  resultado: PassagemDto[];
}
