import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { Documentation } from '@shared/decorators/documentation.decorator';

import { PokemonsListResponse } from './dtos/list-pokemons.dto';
import { PokemonsService } from './pokemons.service';
import { PokemonsCreateRequest, PokemonsCreateResponse } from './dtos/create-pokemons.dto';
import { PokemonsLoadRequest } from './dtos/load-pokemons.dto';
import { PokemonsDeleteRequest } from './dtos/delete-pokemons.dto';
import { PokemonsUpdateRequest } from './dtos/update-pokemons.dto';
import { PokemonsBattleRequest, PokemonsBattleResponse } from './dtos/battle-pokemons.dto';

@ApiTags('Pokemons')
@Controller('/pokemons')
export class PokemonsController {
  constructor(private readonly pokemonsService: PokemonsService) {}

  @Get('')
  @Documentation({
    title: 'List pokemons',
    responses: [{ type: PokemonsListResponse }],
  })
  listPokemons() {
    return this.pokemonsService.list();
  }

  @Post('')
  @HttpCode(200)
  @Documentation({
    title: 'Create pokemon',
    responses: [{ type: PokemonsCreateResponse }],
  })
  createPokemon(@Body() data: PokemonsCreateRequest) {
    return this.pokemonsService.create(data);
  }

  @Get('/:id')
  @Documentation({
    title: 'Load pokemon',
    responses: [{ type: PokemonsCreateResponse }],
  })
  getPokemon(@Param() { id }: PokemonsLoadRequest) {
    return this.pokemonsService.findById(id);
  }

  @Put('/:id')
  @HttpCode(204)
  @Documentation({
    title: 'Update pokemon',
  })
  updatePokemon(@Param() { id }: PokemonsLoadRequest, @Body() data: PokemonsUpdateRequest) {
    this.pokemonsService.update(id, data);
  }

  @Delete('/:id')
  @HttpCode(204)
  @Documentation({
    title: 'Delete pokemon',
  })
  deletePokemon(@Param() { id }: PokemonsDeleteRequest) {
    this.pokemonsService.delete(id);
  }

  @Post('/batalhar/:pokemonAId/:pokemonBId')
  @HttpCode(200)
  @Documentation({
    title: 'Battle pokemon',
    responses: [{ type: PokemonsBattleResponse }],
  })
  toBattle(@Param() { pokemonAId, pokemonBId }: PokemonsBattleRequest) {
    return this.pokemonsService.toBattle(pokemonAId, pokemonBId);
  }
}
