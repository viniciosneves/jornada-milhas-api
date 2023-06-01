import { Module } from '@nestjs/common';
import { DepoimentosService } from './depoimentos.service';
import { DepoimentosController } from './depoimentos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Depoimento } from './entities/depoimento.entity';

@Module({
  controllers: [DepoimentosController],
  providers: [DepoimentosService],
  imports: [TypeOrmModule.forFeature([Depoimento])],
})
export class DepoimentosModule {}
