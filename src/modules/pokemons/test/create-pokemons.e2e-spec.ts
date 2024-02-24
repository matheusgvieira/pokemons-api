import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';

import { getApp } from '../../../../test/testing-module';

const endpoint = '/pokemons';

describe(`[POST] ${endpoint} - Create pokemons`, () => {
  let app: INestApplication;

  beforeEach(async () => {
    app = await getApp();
  });

  it('Create pokemon successfully', async () => {
    const { body, status } = await request(app.getHttpServer()).post(endpoint).send({
      tipo: 'Blastoise',
      treinador: 'Matheus',
    });

    expect(status).toBe(200);

    expect(body).toHaveProperty('id');
    expect(body).toHaveProperty('nivel');
    expect(body).toHaveProperty('tipo');
    expect(body).toHaveProperty('treinador');
  });
});
