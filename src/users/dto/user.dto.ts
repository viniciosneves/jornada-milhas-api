import { ApiProperty } from '@nestjs/swagger';
import { EstadoDto } from 'src/estados/dto/estado.dto';

export class UserDto {
  @ApiProperty()
  nome: string;
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
  @ApiProperty()
  genero: string;

  @ApiProperty()
  cidade: string;
  @ApiProperty()
  estado: EstadoDto;
}
