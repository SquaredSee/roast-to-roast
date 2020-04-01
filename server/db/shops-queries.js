const knex = require('./knex');

const cols = ['id', 'name', 'location', 'website', 'description'];

module.exports = {
  all: () => knex('shops')
    .select(cols),

  create: (shop) => knex('shops')
    .insert(shop, '*'),

  update: (id, shop) => knex('shops')
    .where('id', id)
    .update(shop, '*')
    .select(cols),

  delete: (id) => knex('shops')
    .where('id', id)
    .del(),

  whereId: (id) => knex('shops').where('id', id).first()
    .select(cols),
};
