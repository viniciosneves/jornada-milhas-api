import { ApiProperty } from '@nestjs/swagger';

export class EstadoDto {
  @ApiProperty()
  id?: number;
  @ApiProperty()
  nome: string;
  @ApiProperty()
  sigla: string;
}
