
exports.up = (knex) => {
  return knex.schema.createTable('camisetas', (table) => {
    table.increments();
    table.string('modelo', 80).notNullable();
    table.string('foto').notNullable();
    table.integer('ano').notNullable();
    table.decimal('preco', 9.2).notNullable();
    table.boolean('destaque').notNullable().defaultTo(false);
    table.integer("marca_id").notNullable().unsigned();
    table.foreign('marca_id')
         .references("marcas.id")
         .onDelete("restrict")
         .onUpdate("cascade")

    table.integer('likes').notNullable().defaultTo(0);
    table.integer('dislikes').notNullable().defaultTo(0);
    // cria os campos created_at e updated_at
    table.timestamps(true, true);
  })
};

exports.down = (knex) => knex.schema.dropTable('camisetas');