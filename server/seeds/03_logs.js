exports.seed = function(knex) {
  const logs = [
    {
      coffee: 'GOOD BEANS',
      description: 'These are some really good beans.',
      rating: 5,
      shop_id: knex('shops').where('name', 'Roaster One').select('id'),
      user_id: knex('users').where('username', 'jdoe123').select('id'),
    },
    {
      coffee: 'Latte',
      description: 'Good!!!',
      rating: 5,
      shop_id: knex('shops').where('name', 'Cafe One').select('id'),
      user_id: knex('users').where('username', 'jdoe456').select('id'),
    }
  ];

  // Deletes ALL existing entries
  return knex('logs').del()
    .then(() => {
      // Inserts seed entries
      return knex('logs').insert(logs);
    });
};
