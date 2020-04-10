const knex = require('./knex');

const cols = [
  'logs.id',
  'logs.rating',
  'logs.coffee',
  'logs.tasting_note_1',
  'logs.tasting_note_2',
  'logs.tasting_note_3',
  'logs.origin',
  'logs.date',
  'logs.shop_name'
];

// const update_cols = ['logs.shop_id', 'logs.user_id', ...cols];
const update_cols = ['logs.user_id', ...cols];

const join_cols = [
  // 'shops.name as shop_name',
  'users.first_name as user_first',
  'users.last_name as user_last',
  ...cols
];

module.exports = {
  all: () => knex('logs')
    // .join('shops', 'logs.shop_id', 'shops.id')
    .join('users', 'logs.user_id', 'users.id')
    .select(join_cols),

  create: (log) => knex('logs')
    .insert(log, '*'),

  update: (id, log) => knex('logs')
    .where('id', id)
    .update(log, '*')
    .select(update_cols),

  delete: (id) => knex('logs')
    .where('id', id)
    .del(),

  whereId: (id) => knex('logs').where('id', id).first()
    // .join('shops', 'logs.shop_id', 'shops.id')
    .join('users', 'logs.user_id', 'users.id')
    .select(join_cols),

  whereUserId: (user_id) => knex('logs').where('user_id', user_id)
    // .join('shops', 'logs.shop_id', 'shops.id')
    .join('users', 'logs.user_id', 'users.id')
    .select(join_cols),

  // whereShopId: (shop_id) => knex('logs').where('shop_id', shop_id)
  //   .join('shops', 'logs.shop_id', 'shops.id')
  //   .join('users', 'logs.user_id', 'users.id')
  //   .select(join_cols)
};
