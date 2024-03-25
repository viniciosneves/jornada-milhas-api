import {
  BadRequestException,
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  NotFoundException,
  Patch,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { AuthGuard } from './guards/auth.guard';
import { UserDto } from 'src/users/dto/user.dto';
import { ApiOkResponse } from '@nestjs/swagger';
import { TokenDto } from './dto/token.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({
    type: TokenDto,
  })
  @Post('login')
  signIn(@Body() signInDto: LoginDto) {
    return this.authService.signIn(signInDto.email, signInDto.senha);
  }

  @Post('cadastro')
  @ApiOkResponse({
    type: UserDto,
  })
  async cadastro(@Body() userDto: UserDto) {
    const dbUser = await this.authService.find(userDto.email);

    if (dbUser) {
      throw new BadRequestException({
        erro: 'E-mail já utilizado.',
      });
    }

    return this.authService.cadastro(userDto);
  }
  @Get('perfil')
  @ApiOkResponse({
    type: UserDto,
  })
  @UseGuards(AuthGuard)
  async perfil(@Request() req) {
    const user = await this.authService.find(req.user.email);
    if (!user) {
      throw new NotFoundException();
    }
    return user;
  }
  @Patch('perfil')
  @UseGuards(AuthGuard)
  async atualizar(@Body() userDto: UserDto, @Request() req) {
    await this.authService.update(req.user.email, userDto);
    return this.authService.signIn(userDto.email, userDto.senha);
  }
}
