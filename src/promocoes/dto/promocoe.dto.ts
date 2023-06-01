import { ApiProperty } from '@nestjs/swagger';

export class PromocoesDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  destino: string;
  @ApiProperty()
  imagem: string;
  @ApiProperty()
  preco: number;
}
