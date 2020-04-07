const supertest = require('supertest');

const app = require('../app');
const knex = require('../db/knex');

const users = require('../__fixtures__/users-fixture');

const request = supertest(app);

beforeAll(() => {
  return knex.migrate.latest()
    .then(() => knex.seed.run());
});

test('GET /users returns all entries', async () => {
  const res = await request.get('/users');
  expect(res.statusCode).toEqual(200);
  expect(res.body).toEqual(users.all);
});

test('GET /users/:id returns correct entry', async () => {
  const res = await request.get('/users/2');
  expect(res.statusCode).toEqual(200);
  expect(res.body).toEqual(users.all[1]);
});

test('POST /users creates an entry', async () => {
  const res = await request.post('/users')
    .send(users.new);
  expect(res.statusCode).toEqual(200);
});


test('PUT /users/:id updates an entry', async () => {
  const res = await request.put('/users/2')
    .send(users.new);
  expect(res.statusCode).toEqual(200);
});

test('DELETE /users/:id deletes an entry', async () => {
  const res = await request.del('/users/2');
  expect(res.statusCode).toEqual(200);
});
