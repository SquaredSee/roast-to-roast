const supertest = require('supertest');

const app = require('../app');
const knex = require('../db/knex');

const users = require('../__fixtures__/users-fixture').all;

const request = supertest(app);

beforeAll(() => {
  return knex.migrate.latest()
    .then(() => knex.seed.run());
});

test('/users returns all entries', async () => {
  const res = await request.get('/users');
  expect(res.statusCode).toEqual(200);
  expect(res.body).toEqual(users);
});

test('/users/:id returns correct entry', async () => {
  const res = await request.get('/users/2');
  expect(res.statusCode).toEqual(200);
  expect(res.body).toEqual(users[1]);
});
