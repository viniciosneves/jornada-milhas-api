import { PartialType } from '@nestjs/mapped-types';
import { CreatePassagemDto } from './create-passagem.dto';

export class UpdatePassagemDto extends PartialType(CreatePassagemDto) {}
