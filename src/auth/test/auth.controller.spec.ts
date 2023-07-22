import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AuthModule } from '../auth.module';

import * as request from 'supertest';
import { UserModule } from '../../user/user.module';

describe('AuthController', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AuthModule, UserModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterEach(async () => {
    await app.close();
  });

  describe('Register and login user', () => {
    it('register user', async () => {
      const response = await request(app.getHttpServer()).get(
        '/api/user/test@example.com',
      );

      if (response.body.email) {
        await request(app.getHttpServer()).delete(
          `/api/user/${response.body.email}`,
        );
      }

      return request(app.getHttpServer())
        .post('/api/auth/register')
        .send({
          email: 'test@example.com',
          name: 'Test User',
          password: 'password',
        })
        .expect(201)
        .expect((res) => {
          expect(res.body.email).toEqual('test@example.com');
          expect(res.body.name).toEqual('Test User');
          expect(res.body.password).toBeUndefined();
        });
    });

    it('login user', async () => {
      const response = await request(app.getHttpServer()).get(
        '/api/users/test@example.com',
      );

      if (!response.body) {
        await request(app.getHttpServer()).post('/api/auth/register').send({
          email: 'test@example.com',
          name: 'Test User',
          password: 'password',
        });
      }

      return request(app.getHttpServer())
        .post('/api/auth/login')
        .send({
          email: 'test@example.com',
          password: 'password',
        })
        .expect(201)
        .expect((res) => {
          expect(res.body.email).toEqual('test@example.com');
          expect(res.body.password).toBeUndefined();
        });
    });
  });
});
