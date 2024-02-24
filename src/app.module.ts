import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { TypeOrmModule } from '@nestjs/typeorm';

import { typeorm_config } from '@config/typeorm.config';
import { PokemonsModule } from '@modules/pokemons/pokemons.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [TypeOrmModule.forRoot(typeorm_config), TerminusModule, PokemonsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
