import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Pokemons } from './entities/pokemons.entity';
import { PokemonsController } from './pokemons.controller';
import { PokemonsService } from './pokemons.service';

@Module({
  imports: [TypeOrmModule.forFeature([Pokemons])],
  controllers: [PokemonsController],
  providers: [PokemonsService],
})
export class PokemonsModule {}
