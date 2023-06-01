import { ApiProperty } from '@nestjs/swagger';
import { EstadoDto } from 'src/estados/dto/estado.dto';

export class RegisterDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  nascimento: Date;
  @ApiProperty()
  cpf: string;
  @ApiProperty()
  telefone: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  senha: string;
  @ApiProperty({ type: EstadoDto })
  destino: EstadoDto;
}
