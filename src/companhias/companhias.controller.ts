import {
  Controller,
  Get,
  // Post,
  // Body,
  // Patch,
  // Param,
  // Delete,
} from '@nestjs/common';
import { CompanhiasService } from './companhias.service';
import { ApiOkResponse } from '@nestjs/swagger';
import { CompanhiaDto } from './dto/companhia.dto';
// import { CreateCompanhiaDto } from './dto/create-companhia.dto';
// import { UpdateCompanhiaDto } from './dto/update-companhia.dto';

@Controller('companhias')
export class CompanhiasController {
  constructor(private readonly companhiasService: CompanhiasService) {}

  // @Post()
  // create(@Body() createCompanhiaDto: CreateCompanhiaDto) {
  //   return this.companhiasService.create(createCompanhiaDto);
  // }

  @Get()
  @ApiOkResponse({
    type: CompanhiaDto,
  })
  findAll() {
    return this.companhiasService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.companhiasService.findOne(+id);
  // }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateCompanhiaDto: UpdateCompanhiaDto,
  // ) {
  //   return this.companhiasService.update(+id, updateCompanhiaDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.companhiasService.remove(+id);
  // }
}
