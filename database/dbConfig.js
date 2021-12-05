require('dotenv').config()

const knex = require('knex')({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : 'docker',
    database : 'camiseta',
    port: '5433'
  }
});

module.exports = knex;