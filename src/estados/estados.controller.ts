import {
  Controller,
  Get,
  // Post,
  // Body,
  // Patch,
  // Param,
  // Delete,
} from '@nestjs/common';
import { EstadosService } from './estados.service';
import { ApiOkResponse } from '@nestjs/swagger';
import { EstadoDto } from './dto/estado.dto';
// import { CreateEstadoDto } from './dto/create-estado.dto';
// import { UpdateEstadoDto } from './dto/update-estado.dto';

@Controller('estados')
export class EstadosController {
  constructor(private readonly estadosService: EstadosService) {}

  // @Post()
  // create(@Body() createEstadoDto: CreateEstadoDto) {
  //   this.estadosService.create(createEstadoDto);
  //   return true;
  // }

  @Get()
  @ApiOkResponse({
    type: EstadoDto,
  })
  findAll() {
    return this.estadosService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.estadosService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateEstadoDto: UpdateEstadoDto) {
  //   return this.estadosService.update(+id, updateEstadoDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.estadosService.remove(+id);
  // }
}
