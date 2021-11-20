
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('marcas').del()
    .then(function () {
      // Inserts seed entries
      return knex('marcas').insert([
        {nome: 'puma'},
        {nome: 'nike'},
        {nome: 'adidas'},
        {nome: 'hollister'},
      ]);
    });
};
