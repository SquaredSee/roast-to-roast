
exports.up = function(knex) {
  return knex.schema.createTable('logs', (table) => {
    table.increments('id');
    table.datetime('date')
      .defaultTo(knex.fn.now());
    table.text('coffee')
      .notNullable();
    table.text('description')
      .notNullable();
    table.integer('shop_id')
      .unsigned();
    table.integer('user_id')
      .unsigned()
      .notNullable();
    table.timestamp('created_at')
      .defaultTo(knex.fn.now())
      .notNullable();
    table.timestamp('updated_at')
      .defaultTo(knex.fn.now())
      .notNullable();

    table.foreign('shop_id')
      .references('shops.id');
    table.foreign('user_id')
      .references('users.id');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('logs');
};
