const supertest = require('supertest');

const app = require('../app');
const knex = require('../db/knex');

const request = supertest(app);

beforeAll(() => {
  return knex.migrate.latest()
    .then(() => knex.seed.run());
});

describe('test /users', () => {
  test('/users returns all entries', async () => {
    const res = await request.get('/users');
    expect(res.statusCode).toEqual(200);
  });
});

describe('test /shops', () => {
  test('/users returns all entries', async () => {
    const res = await request.get('/shops');
    expect(res.statusCode).toEqual(200);
  });
});

describe('test /logs', () => {
  test('/users returns all entries', async () => {
    const res = await request.get('/logs');
    expect(res.statusCode).toEqual(200);
  });
});
