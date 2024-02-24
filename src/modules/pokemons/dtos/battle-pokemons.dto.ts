import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';
import { Transform } from 'class-transformer';

import { Pokemons } from '../entities/pokemons.entity';

export class PokemonsBattleRequest {
  @ApiProperty({ example: 1 })
  @Transform(({ value }) => Number(value))
  @IsNumber()
  pokemonAId: number;

  @ApiProperty({ example: 2 })
  @Transform(({ value }) => Number(value))
  @IsNumber()
  pokemonBId: number;
}

export class PokemonsBattleResponse {
  @ApiProperty({ example: Pokemons })
  vencedor: Pokemons;

  @ApiProperty({ example: Pokemons })
  perdedor: Pokemons;
}
