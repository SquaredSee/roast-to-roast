const knex = require('./knex');

const cols = ['id', 'email', 'first_name', 'last_name', 'location', 'username'];

module.exports = {
  all: () => knex('users')
    .select(cols),

  create: (user) => knex('users')
    .insert(user, '*'),

  update: (id, user) => knex('users')
    .where('id', id)
    .update(user, '*')
    .select(cols),

  delete: (id) => knex('users')
    .where('id', id)
    .del(),

  whereId: (id) => knex('users').where('id', id).first()
    .select(cols),

  whereUsername: (uname) => knex('users').where({username: uname})
    .select(cols),

  whereName: (name) => knex('users').where('first_name', 'like', `%${name}%`)
    .orWhere('last_name', 'like', `%${name}%`)
    .select(cols),

  whereFullName: (fname, lname) => knex('users').where('first_name', 'like', `%${fname}`)
    .andWhere('last_name', 'like', `%${lname}%`)
    .select(cols),
};
