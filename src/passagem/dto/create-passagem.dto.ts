import { Estado } from 'src/estados/entities/estado.entity';
import { TipoPassagem } from '../entities/passagem.entity';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePassagemDto {
  @ApiProperty()
  tipo: TipoPassagem;
  @ApiProperty()
  precoIda: number;
  @ApiProperty()
  precoVolta: number;
  @ApiProperty()
  taxaEmbarque: number;
  @ApiProperty()
  conexoes: number;
  @ApiProperty()
  tempoVoo: number;
  @ApiProperty()
  origem: Estado;
  @ApiProperty()
  destino: Estado;
}
