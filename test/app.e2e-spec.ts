import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { SomeService } from '../src/some-lib/some.service';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();

    jest.spyOn(app.get(SomeService), 'foo').mockReturnValue('baz');

    await app.init();
  });

  it('/a (GET)', () => {
    return request(app.getHttpServer()).get('/a').expect(200).expect('baz');
  });

  it('/b (GET)', () => {
    return request(app.getHttpServer()).get('/b').expect(200).expect('baz');
  });

  it('/c (GET)', () => {
    return request(app.getHttpServer()).get('/c').expect(200).expect('baz');
  });
});
