
exports.up = function(knex) {
  return knex.schema.createTable('shops', (table) => {
    table.increments('id');
    table.text('name')
      .notNullable();
    table.text('location')
      .notNullable();
    table.integer('roaster_id')
      .unsigned();
    table.text('website');
    table.text('description');

    table.foreign('roaster_id')
      .references('shops.id');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('shops');
};
