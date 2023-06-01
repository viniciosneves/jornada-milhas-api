import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
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
  cadastro(@Body() userDto: UserDto) {
    return this.authService.cadastro(userDto);
  }
  @Get('perfil')
  @ApiOkResponse({
    type: UserDto,
  })
  @UseGuards(AuthGuard)
  perfil(@Request() req) {
    return this.authService.find(req.user.email);
  }
  @Patch('perfil')
  @UseGuards(AuthGuard)
  atualizar(@Body() userDto: UserDto, @Request() req) {
    return this.authService.update(req.user.email, userDto);
  }
}
