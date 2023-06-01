import { UserDto } from './user.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UserUpdateDto extends PartialType(UserDto) {}
