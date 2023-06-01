import { Module } from '@nestjs/common';
import { PromocoesService } from './promocoes.service';
import { PromocoesController } from './promocoes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Promocao } from './entities/promocao.entity';

@Module({
  controllers: [PromocoesController],
  providers: [PromocoesService],
  imports: [TypeOrmModule.forFeature([Promocao])],
})
export class PromocoesModule {}
