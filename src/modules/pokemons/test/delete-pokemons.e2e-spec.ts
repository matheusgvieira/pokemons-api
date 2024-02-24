import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';

import { getApp } from '../../../../test/testing-module';

const endpoint = '/pokemons';

describe(`[DELETE] ${endpoint} - Delete pokemons`, () => {
  let app: INestApplication;

  beforeEach(async () => {
    app = await getApp();
  });

  it('Should be able to successfully delete pokemon', async () => {
    const { status } = await request(app.getHttpServer()).delete(endpoint + '/2');

    expect(status).toBe(204);
  });
});
