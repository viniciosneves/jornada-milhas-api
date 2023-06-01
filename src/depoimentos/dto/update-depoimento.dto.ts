import { PartialType } from '@nestjs/mapped-types';
import { CreateDepoimentoDto } from './create-depoimento.dto';

export class UpdateDepoimentoDto extends PartialType(CreateDepoimentoDto) {}
