// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
  connection: process.env.DATABASE_URL,
  searchPath: ['knex', 'public'],
    migrations: {
      tableName: 'migrations',
      directory: 'database/migrations'
    },
    seeds: {
      directory: 'database/seeds'
    }
  }

};
