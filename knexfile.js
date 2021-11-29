// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    url: process.env.DATABASE_URL,
    migrations: {
      tableName: 'migrations',
      directory: 'database/migrations'
    },
    seeds: {
      directory: 'database/seeds'
    }
  }

};
