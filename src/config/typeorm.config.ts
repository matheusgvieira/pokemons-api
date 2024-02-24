import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';

import { Pokemons } from '@modules/pokemons/entities/pokemons.entity';
import PokemonsSeeder from '@shared/database/typeorm/seeds/pokemons.seed';
import '../shared/utils/env.util';

export const typeorm_config: DataSourceOptions & SeederOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  // synchronize: true,
  logging: false,
  entities: [Pokemons],
  seeds: [PokemonsSeeder],
};

export const data_source = new DataSource({
  ...typeorm_config,
  migrations: ['src/shared/database/typeorm/migrations/**'],
});
