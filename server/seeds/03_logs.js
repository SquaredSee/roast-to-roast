exports.seed = function(knex) {
  const logs = [
    {
      coffee: 'Beans - Finca de los Andes',
      tasting_note_1: 'Chocolate',
      tasting_note_2: 'Fruit',
      tasting_note_3: '',
      shop_name: 'Coffee Emporium - Hyde Park',
      origin: 'Guatemala',
      rating: 9,
      // shop_id: knex('shops').where('name', 'Roaster One').select('id'),
      user_id: knex('users').where('username', 'jdoe123').select('id'),
    },
    {
      coffee: 'Latte',
      tasting_note_1: 'Rich',
      tasting_note_2: '',
      tasting_note_3: '',
      shop_name: 'Lola\'s Downtown',
      origin: '',
      rating: 8,
      // shop_id: knex('shops').where('name', 'Cafe One').select('id'),
      user_id: knex('users').where('username', 'jdoe123').select('id'),
    }
  ];

  // Deletes ALL existing entries
  return knex('logs').del()
    .then(() => {
      // Inserts seed entries
      return knex('logs').insert(logs);
    });
};
