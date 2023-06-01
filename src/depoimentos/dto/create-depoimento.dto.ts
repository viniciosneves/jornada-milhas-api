import { ApiProperty } from '@nestjs/swagger';

export class CreateDepoimentoDto {
  @ApiProperty()
  texto: string;
  @ApiProperty()
  autor: string;
  @ApiProperty()
  avatar: string;
}
