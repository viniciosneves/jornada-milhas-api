import { ApiProperty } from '@nestjs/swagger';

export class CreateEstadoDto {
  @ApiProperty()
  nome: string;
  @ApiProperty()
  sigla: string;
}
