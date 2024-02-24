import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';
import { Transform } from 'class-transformer';

import { Pokemons } from '../entities/pokemons.entity';

export class PokemonsLoadRequest {
  @ApiProperty({ example: 1 })
  @Transform(({ value }) => Number(value))
  @IsNumber()
  id: number;
}

export class PokemonsLoadResponse extends Pokemons {}
