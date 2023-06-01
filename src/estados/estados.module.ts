import { Module } from '@nestjs/common';
import { EstadosService } from './estados.service';
import { EstadosController } from './estados.controller';
import { Estado } from './entities/estado.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Estado])],
  controllers: [EstadosController],
  providers: [EstadosService],
})
export class EstadosModule {}
