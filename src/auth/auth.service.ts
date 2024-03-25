import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { UserDto } from 'src/users/dto/user.dto';
import { jwtConstants } from './constants';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, senha: string): Promise<any> {
    const user = await this.usersService.findOne(email);
    // essa é uma aplicação exemplo, para fins educativos.
    // NUNCA guarde a senha do usuário sem criptografar ela antes, por exemplo usando o bcrypt
    if (!user || user?.senha !== senha) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user.id, email: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload, {
        secret: jwtConstants.secret,
      }),
    };
  }
  async cadastro(userDto: UserDto): Promise<any> {
    const user = await this.usersService.create(userDto);
    delete user.senha;
    delete user.id;
    return user;
  }
  async find(email: string): Promise<any> {
    const user = await this.usersService.findOne(email);
    if (user) {
      delete user.senha;
      delete user.id;
    }
    return user;
  }

  async update(email: string, userDto: UserDto) {
    const user = await this.usersService.findOne(email);
    await this.usersService.update(user.id, userDto);
    return this.find(email);
  }
}
