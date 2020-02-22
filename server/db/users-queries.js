const knex = require('./knex');

const users = knex('users');

const cols = ['id', 'email', 'first_name', 'last_name', 'location', 'username'];

module.exports = {
  all: () => users
    .select(cols),

  whereId: (id) => users.where({id: id})
    .select(cols),

  whereUsername: (uname) => users.where({username: uname})
    .select(cols),

  whereName: (name) => users.where('first_name', 'like', `%${name}%`)
    .orWhere('last_name', 'like', `%${name}%`)
    .select(cols),

  whereFullName: (fname, lname) => users.where('first_name', 'like', `%${fname}`)
    .andWhere('last_name', 'like', `%${lname}%`)
    .select(cols)
};
