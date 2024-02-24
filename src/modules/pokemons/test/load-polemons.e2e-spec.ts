import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';

import { getApp } from '../../../../test/testing-module';

const endpoint = '/pokemons';

describe(`[GET] ${endpoint} - Load pokemons`, () => {
  let app: INestApplication;

  beforeEach(async () => {
    app = await getApp();
  });

  it('Should be able to successfully get a list of pokemons', async () => {
    const { body, status } = await request(app.getHttpServer()).get(endpoint + '/1');

    expect(status).toBe(200);

    expect(body).toHaveProperty('id');
    expect(body).toHaveProperty('tipo');
    expect(body).toHaveProperty('nivel');
    expect(body).toHaveProperty('treinador');
  });
});
