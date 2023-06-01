import { ApiProperty } from '@nestjs/swagger';

export class DepoimentoDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  texto: string;
  @ApiProperty()
  autor: string;
  @ApiProperty()
  avatar: string;
}
