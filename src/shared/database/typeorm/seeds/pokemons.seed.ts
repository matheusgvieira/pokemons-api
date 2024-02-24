import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';

import { Pokemons } from '@modules/pokemons/entities/pokemons.entity';

export default class PokemonsSeeder implements Seeder {
  public async run(dataSource: DataSource, _factoryManager: SeederFactoryManager): Promise<void> {
    const repository = dataSource.getRepository(Pokemons);
    await repository.insert({
      id: 1,
      tipo: 'pikachu',
      treinador: 'Thiago',
      nivel: 1,
    });

    await repository.insert({
      id: 2,
      tipo: 'charizard',
      treinador: 'Renato',
      nivel: 1,
    });
  }
}
