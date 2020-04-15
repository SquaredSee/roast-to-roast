exports.seed = function(knex) {
  const shops = require('../__fixtures__/shops-fixture');

  // Deletes ALL existing entries
  return knex('shops').del()
    .then(() => {
      // Inserts seed entries
      return knex('shops').insert(shops);
    });
};
