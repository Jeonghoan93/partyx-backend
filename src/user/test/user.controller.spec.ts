import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { UserModule } from '../user.module';

import * as request from 'supertest';

describe('UserController', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [UserModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterEach(async () => {
    await app.close();
  });

  describe('find user or users', () => {
    it('find user by email', () => {
      return request(app.getHttpServer())
        .get('/api/user/test@example.com')
        .expect(200)
        .expect((res) => {
          expect(res.body.email).toEqual('test@example.com');
          expect(res.body.password).toBeUndefined();
        });
    });

    it('find all users', async () => {
      await request(app.getHttpServer()).get('/api/user').expect(200);

      // console.log('response.body: ', response.body);
    });
  });
});
