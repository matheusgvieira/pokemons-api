import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';

import { getApp } from '../../../../test/testing-module';

const endpoint = '/pokemons';

describe(`[POST] ${endpoint} - Battle pokemons`, () => {
  let app: INestApplication;

  beforeEach(async () => {
    app = await getApp();
  });

  it('Battle pokemon successfully', async () => {
    const { body, status } = await request(app.getHttpServer()).post(endpoint + '/batalhar/1/2');

    expect(status).toBe(200);

    expect(body).toHaveProperty('vencedor');
    expect(body.vencedor.id).toBe(1);
    expect(body).toHaveProperty('perdedor');
    expect(body.perdedor.id).toBe(2);
  });
});
