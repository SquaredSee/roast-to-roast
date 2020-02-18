exports.seed = function(knex) {
  const shops = [
    {
      name: 'Roaster One',
      location: '123 Yeet St.',
      website: 'roaster-one.com',
      description: 'ONE of the best roasters around!!!1!'
    },
    {
      name: 'Cafe One',
      location: '321 Blue St.',
      website: 'cafe-one.com',
      description: ':)'
    },
  ];

  // Deletes ALL existing entries
  return knex('shops').del()
    .then(() => {
      // Inserts seed entries
      return knex('shops').insert(shops);
    });
};
