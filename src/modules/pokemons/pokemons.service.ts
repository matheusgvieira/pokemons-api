import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Pokemons } from './entities/pokemons.entity';
import { PokemonsBattleResponse } from './dtos/battle-pokemons.dto';

@Injectable()
export class PokemonsService {
  constructor(
    @InjectRepository(Pokemons)
    private paymentLinkRepository: Repository<Pokemons>,
  ) {}

  list() {
    return this.paymentLinkRepository.find({ order: { id: 'ASC' } });
  }

  async create(data: ICreatePokemons): Promise<Pokemons> {
    const response = this.paymentLinkRepository.create(data);

    this.paymentLinkRepository.save(response);

    const pokemon = await this.findById(response.id);

    return pokemon;
  }

  async update(id: number, data: IUpdatePokemons): Promise<void> {
    await this.paymentLinkRepository.update(id, data);
  }

  async findById(id: number): Promise<Pokemons> {
    return this.paymentLinkRepository.findOne({ where: { id } });
  }

  async delete(id: number): Promise<void> {
    await this.paymentLinkRepository.delete(id);
  }

  async updateLevel(id: number, nivel: number): Promise<void> {
    await this.paymentLinkRepository.update(id, { nivel });
  }

  async toBattle(pokemonAId: number, pokemonBId: number): Promise<PokemonsBattleResponse> {
    const pokemon_a = await this.findById(pokemonAId);
    const pokemon_b = await this.findById(pokemonBId);

    const vencedor = Math.random() < pokemon_a.nivel / (pokemon_a.nivel + pokemon_b.nivel) ? pokemon_a : pokemon_b;

    const perdedor = vencedor === pokemon_a ? pokemon_b : pokemon_a;

    // Se o perdedor chegar a nível 0, remove-o
    if (perdedor.nivel <= 0) {
      this.delete(perdedor.id);
    }

    // Salva as alterações no banco de dados
    await this.updateLevel(vencedor.id, vencedor.nivel);

    return {
      vencedor,
      perdedor,
    };
  }
}

export type ICreatePokemons = Omit<Pokemons, 'id' | 'nivel'>;
export type IUpdatePokemons = Omit<Pokemons, 'id' | 'nivel' | 'tipo'>;
