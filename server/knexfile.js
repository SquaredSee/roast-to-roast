// Read config here so migration cli works
require('dotenv').config();

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    }
  },

  test: {
    client: 'sqlite3',
    connection: {
      filename: './test.sqlite3'
    }
  },

  production: {
    client: 'postgresql',
    connection: process.env.DB_CONNECTION_STRING
  }

};
