import { Module } from '@nestjs/common';
import { PassagemService } from './passagem.service';
import { PassagemController } from './passagem.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Passagem } from './entities/passagem.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Passagem])],
  controllers: [PassagemController],
  providers: [PassagemService],
  exports: [TypeOrmModule],
})
export class PassagemModule {}
