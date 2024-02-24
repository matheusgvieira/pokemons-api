import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';

import { getApp } from '../../../../test/testing-module';

const endpoint = '/pokemons';

describe(`[GET] ${endpoint} - List pokemons`, () => {
  let app: INestApplication;

  beforeEach(async () => {
    app = await getApp();
  });

  it('Should be able to successfully get a list of pokemons', async () => {
    const { body, status } = await request(app.getHttpServer()).get(endpoint);

    expect(status).toBe(200);

    expect(Array.isArray(body)).toBeTruthy();
    expect(body.length).toBeGreaterThan(0);
    expect(body[0]).toHaveProperty('id');
  });
});
