import { ApiProperty } from '@nestjs/swagger';

export class CreatePromocoeDto {
  @ApiProperty()
  destino: string;
  @ApiProperty()
  imagem: string;
  @ApiProperty()
  preco: number;
}
