exports.seed = function(knex) {
  const users = [
    {
      username: 'jdoe123',
      first_name: 'John',
      last_name: 'Doe',
      email: 'john.doe@rtr.com',
      location: '22 Jump St.'
    },
    {
      username: 'jdoe456',
      first_name: 'Jane',
      last_name: 'Doe',
      email: 'jane.doe@rtr.com',
      location: '22 Jump St.'
    }
  ];

  // Deletes ALL existing entries
  return knex('users').del()
    .then(() => {
      // Inserts seed entries
      return knex('users').insert(users);
    });
};
