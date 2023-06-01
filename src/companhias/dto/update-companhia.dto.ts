import { PartialType } from '@nestjs/mapped-types';
import { CreateCompanhiaDto } from './create-companhia.dto';

export class UpdateCompanhiaDto extends PartialType(CreateCompanhiaDto) {}
