
module.exports = {

  development: {
    client: 'pg',
    connection: {
      host:     '127.0.0.1',
      database: 'camiseta',
      user:     'postgres',
      password: 'docker',
      port: '5433'
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