import {
  Controller,
  Get,
  // Post,
  // Body,
  // Patch,
  // Param,
  // Delete,
  Query,
} from '@nestjs/common';
import { PassagemService } from './passagem.service';
// import { CreatePassagemDto } from './dto/create-passagem.dto';
// import { UpdatePassagemDto } from './dto/update-passagem.dto';
import { QueryPassagemDto } from './dto/query-passagem.dto';
import { PaginationDto } from './dto/pagination.dto';
import { ApiOkResponse } from '@nestjs/swagger';

@Controller('passagem')
export class PassagemController {
  constructor(private readonly passagemService: PassagemService) {}

  // @Post()
  // create(@Body() createPassagemDto: CreatePassagemDto) {
  //   this.passagemService.create(createPassagemDto);
  //   return true;
  // }

  // @Get()
  // findAll() {
  //   return this.passagemService.findAll();
  // }

  @Get('search')
  @ApiOkResponse({
    type: PaginationDto,
  })
  search(@Query() queryDto: QueryPassagemDto): Promise<PaginationDto> {
    return this.passagemService.search(queryDto);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.passagemService.findOne(+id);
  // }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updatePassagemDto: UpdatePassagemDto,
  // ) {
  //   return this.passagemService.update(+id, updatePassagemDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.passagemService.remove(+id);
  // }
}
