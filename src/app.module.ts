import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { EstadosModule } from './estados/estados.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from '../ormconfig';
import { DataSource } from 'typeorm';
import { PassagemModule } from './passagem/passagem.module';
import { CompanhiasModule } from './companhias/companhias.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { PromocoesModule } from './promocoes/promocoes.module';
import { DepoimentosModule } from './depoimentos/depoimentos.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    EstadosModule,
    PassagemModule,
    CompanhiasModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      serveRoot: '/public',
    }),
    PromocoesModule,
    DepoimentosModule,
    AuthModule,
    UsersModule,
  ],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
