// Read config here so migration cli works
require('dotenv').config();

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    }
  },

  testing: {
    client: 'postgresql',
    connection: process.env.DB_CONNECTION_STRING
  },

  production: {
    client: 'postgresql',
    connection: process.env.DB_CONNECTION_STRING
  }

};
