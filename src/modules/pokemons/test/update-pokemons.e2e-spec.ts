import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';

import { getApp } from '../../../../test/testing-module';

const endpoint = '/pokemons';

describe(`[PUT] ${endpoint} - Update pokemons`, () => {
  let app: INestApplication;

  beforeEach(async () => {
    app = await getApp();
  });

  it('Create pokemon successfully', async () => {
    const { status } = await request(app.getHttpServer())
      .put(endpoint + '/1')
      .send({
        treinador: 'Ash',
      });

    expect(status).toBe(204);
  });
});
