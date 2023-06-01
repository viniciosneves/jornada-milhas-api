import {
  Controller,
  Get,
  // Post,
  // Body,
  // Patch,
  // Param,
  // Delete,
} from '@nestjs/common';
import { PromocoesService } from './promocoes.service';
import { PromocoesDto } from './dto/promocoe.dto';
import { ApiOkResponse } from '@nestjs/swagger';
// import { CreatePromocoeDto } from './dto/create-promocoe.dto';
// import { UpdatePromocoeDto } from './dto/update-promocoe.dto';

@Controller('promocoes')
export class PromocoesController {
  constructor(private readonly promocoesService: PromocoesService) {}

  // @Post()
  // create(@Body() createPromocoeDto: CreatePromocoeDto) {
  //   return this.promocoesService.create(createPromocoeDto);
  // }

  @Get()
  @ApiOkResponse({
    type: PromocoesDto,
  })
  findAll() {
    return this.promocoesService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.promocoesService.findOne(+id);
  // }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updatePromocoeDto: UpdatePromocoeDto,
  // ) {
  //   return this.promocoesService.update(+id, updatePromocoeDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.promocoesService.remove(+id);
  // }
}
