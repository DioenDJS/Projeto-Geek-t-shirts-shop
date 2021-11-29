// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host:      process.env.DB_HOST,
      database:  process.env.DB_BANCO,
      user:      process.env.DB_USER,
      password:  process.env.DB_PASS
    },
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
