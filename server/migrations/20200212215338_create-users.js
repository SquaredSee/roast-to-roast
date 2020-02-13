
exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id');
    table.text('username')
      .notNullable();
    table.text('first_name');
    table.text('last_name');
    table.text('email')
      .notNullable();
    table.text('location');

    table.timestamp('created_at')
      .defaultTo(knex.fn.now())
      .notNullable();
    table.timestamp('updated_at')
      .defaultTo(knex.fn.now())
      .notNullable();

    table.foreign('shop_id')
      .references('shops.id');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
