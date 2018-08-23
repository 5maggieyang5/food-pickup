
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('client').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('client').insert({id: 1, name: 'Thomas', phone:  '647-000-1111'}),
        knex('client').insert({id: 2, name: 'Maggie', phone:  '647-111-2222'}),
        knex('client').insert({id: 3, name: 'Chris',  phone:  '647-222-3333'})

      ]);
    });
  }

