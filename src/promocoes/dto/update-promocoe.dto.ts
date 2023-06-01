import { PartialType } from '@nestjs/mapped-types';
import { CreatePromocoeDto } from './create-promocoe.dto';

export class UpdatePromocoeDto extends PartialType(CreatePromocoeDto) {}
