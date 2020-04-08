exports.seed = function(knex) {
  const logs = [
    {
      coffee: 'GOOD BEANS',
      tasting_note_1: 'Chocolatey',
      // tasting_note_2: 'Chocolatey',
      // tasting_note_3: 'Chocolatey',
      shop_name: 'Roaster One',
      origin: 'yeet!',
      rating: 5,
      // shop_id: knex('shops').where('name', 'Roaster One').select('id'),
      user_id: knex('users').where('username', 'jdoe123').select('id'),
    },
    {
      coffee: 'Latte',
      tasting_note_1: 'Fruity',
      // tasting_note_2: 'Fruity',
      // tasting_note_3: 'Fruity',
      shop_name: 'Cafe One',
      origin: 'yeet :(',
      rating: 5,
      // shop_id: knex('shops').where('name', 'Cafe One').select('id'),
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
