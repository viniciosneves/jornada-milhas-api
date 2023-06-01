import { ApiProperty } from '@nestjs/swagger';

export class CreateCompanhiaDto {
  @ApiProperty()
  nome: string;
}
