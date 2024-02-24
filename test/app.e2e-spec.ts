import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';

import { getApp } from './testing-module';

describe('/ - Root routes', () => {
  let app: INestApplication;

  beforeEach(async () => {
    app = await getApp();
  });

  it('Home route', () => {
    return request(app.getHttpServer()).get('/').expect(200);
  });

  it('Readyz route', () => {
    return request(app.getHttpServer()).get('/readyz').expect(200);
  });
});
