import {
  Controller,
  Get,
  // Post,
  // Body,
  // Patch,
  // Param,
  // Delete,
} from '@nestjs/common';
import { DepoimentosService } from './depoimentos.service';
import { ApiOkResponse } from '@nestjs/swagger';
import { DepoimentoDto } from './dto/depoimento.dto';
// import { CreateDepoimentoDto } from './dto/create-depoimento.dto';
// import { UpdateDepoimentoDto } from './dto/update-depoimento.dto';

@Controller('depoimentos')
export class DepoimentosController {
  constructor(private readonly depoimentosService: DepoimentosService) {}

  // @Post()
  // create(@Body() createDepoimentoDto: CreateDepoimentoDto) {
  //   return this.depoimentosService.create(createDepoimentoDto);
  // }

  @Get()
  @ApiOkResponse({
    type: DepoimentoDto,
  })
  findAll() {
    return this.depoimentosService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.depoimentosService.findOne(+id);
  // }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateDepoimentoDto: UpdateDepoimentoDto,
  // ) {
  //   return this.depoimentosService.update(+id, updateDepoimentoDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.depoimentosService.remove(+id);
  // }
}
