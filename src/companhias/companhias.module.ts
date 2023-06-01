import { Module } from '@nestjs/common';
import { CompanhiasService } from './companhias.service';
import { CompanhiasController } from './companhias.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Companhia } from './entities/companhia.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Companhia])],
  controllers: [CompanhiasController],
  providers: [CompanhiasService],
})
export class CompanhiasModule {}
