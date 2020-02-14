const logs = [
  {
  }
];

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('logs').del()
    .then(() => {
      // Inserts seed entries
      return knex('logs').insert(logs);
    });
};
