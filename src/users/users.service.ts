import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private repository: Repository<User>,
  ) {}

  async findOne(email: string) {
    return this.repository.findOne({
      where: { email },
      relations: ['estado'],
    });
  }
  create(userDto: UserDto) {
    return this.repository.save(userDto);
  }
  update(id: number, updateUserDto: UserDto) {
    return this.repository.update(id, updateUserDto);
  }
}
