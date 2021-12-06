
exports.up = (knex) => {
  return knex.schema.createTable('likes', (table) =>{
      table.increments();
      table.integer("usuario_id").notNullable().unsigned();
      table.foreign("usuario_id")
           .references("usuario_id")
           .onDelete("restrict")
           .onUpdate("cascade");

      table.integer("camiseta_id").notNullable().unsigned();
      table.foreign('camiseta_id')
           .references("camisetas_id")
           .onDelete("restrict")
           .onUpdate("cascade"); 
      
      table.boolean("gostou").notNullable().defaultTo(true);

      table.timestamps(true, true);
  })
};

exports.down = (knex) => knex.schema.dropTable('likes');
