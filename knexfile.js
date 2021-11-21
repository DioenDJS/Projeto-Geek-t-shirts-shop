// Update with your config settings.

module.exports = {

  development: {
    connection: {
      host:     '127.0.0.1',
      database: 'camisetas',
      user:     'root',
      password: '1234'
    },
    migrations: {
      tableName: 'migrations',
      directory: 'database/migrations'
    },
    seeds: {
      directory: 'database/seeds'
    }
  }

};
