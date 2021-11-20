
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('camisetas').del()
    .then(function () {
      // Inserts seed entries
      return knex('camisetas').insert([
        {modelo: 'verde_copy', marca_id: 5, ano: 2020, preco: 5999, foto: 'https://www.cz10.com.br/media/catalog/product/cache/1/small_image/330x330/9df78eab33525d08d6e5fb8d27136e95/1/u/1up-cam-masculina-verde_copy_.jpg'},
        {modelo: 'deadpool', marca_id: 2, ano: 2020, preco: 7999, foto: 'https://www.cz10.com.br/media/catalog/product/cache/1/small_image/330x330/9df78eab33525d08d6e5fb8d27136e95/b/i/bigdeadpool-feminina-vermelho_copy_.jpg'},
        {modelo: 'blackphanter', marca_id: 3, ano: 2020, preco: 3999, foto: 'https://www.cz10.com.br/media/catalog/product/cache/1/small_image/330x330/9df78eab33525d08d6e5fb8d27136e95/b/l/blackphanter-masculina-preto_copy__1.jpg'}
      ]);
    });
};
