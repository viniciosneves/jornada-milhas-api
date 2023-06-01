import { ApiProperty } from '@nestjs/swagger';

export class CompanhiaDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  nome: string;
}
