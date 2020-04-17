
exports.up = function(knex) {
  return knex.schema.createTable('logs', (table) => {
    table.increments('id');
    table.datetime('date')
      .defaultTo(knex.fn.now())
      .notNullable();
    table.text('coffee')
      .notNullable();
    table.text('origin')
      .defaultTo('');
    table.text('tasting_note_1')
      .notNullable()
      .defaultTo('');
    table.text('tasting_note_2')
      .defaultTo('');
    table.text('tasting_note_3')
      .defaultTo('');
    table.integer('rating')
      .notNullable()
      .unsigned();
    table.text('shop_name')
      .notNullable();
    // table.integer('shop_id')
    //   .unsigned();
    table.integer('user_id')
      .unsigned()
      .notNullable();
    table.timestamp('created_at')
      .defaultTo(knex.fn.now())
      .notNullable();
    table.timestamp('updated_at')
      .defaultTo(knex.fn.now())
      .notNullable();

    // table.foreign('shop_id')
    //   .references('shops.id');
    table.foreign('user_id')
      .references('users.id');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('logs');
};
