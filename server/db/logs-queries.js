const knex = require('./knex');

const cols = ['id', 'shop_id', 'user_id', 'rating', 'coffee', 'description'];

module.exports = {
  all: () => knex('logs')
    .select(cols),

  create: (log) => knex('logs')
    .insert(log, '*'),

  update: (id, log) => knex('logs')
    .where('id', id)
    .update(log, '*')
    .select(cols),

  delete: (id) => knex('logs')
    .where('id', id)
    .del(),

  whereId: (id) => knex('logs').where('id', id).first()
    .select(cols),
};
