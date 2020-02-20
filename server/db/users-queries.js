const knex = require('./knex');

const users = knex('users');

module.exports = {
  all: () => users,

  whereId: (id) => users.where({id: id}),

  whereUsername: (uname) => users.where({username: uname}),

  whereName: (name) => users.where('first_name', 'like', `%${name}%`)
    .orWhere('last_name', 'like', `%${name}%`),

  whereFullName: (fname, lname) => users.where('first_name', 'like', `%${fname}`)
    .andWhere('last_name', 'like', `%${lname}%`)
};
