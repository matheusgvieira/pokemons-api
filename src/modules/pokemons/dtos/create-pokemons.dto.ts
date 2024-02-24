import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

import { Pokemons } from '../entities/pokemons.entity';

export class PokemonsCreateRequest {
  @ApiProperty()
  @IsString()
  tipo: string;

  @ApiProperty()
  @IsString()
  treinador: string;
}

export class PokemonsCreateResponse extends Pokemons {}
