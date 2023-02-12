const path = require('path');
const parse = require('pg-connection-string').parse

// module.exports = ({ env }) => ({
//     connection: {
//       client: 'sqlite',
//       connection: {
//         filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
//       },
//       useNullAsDefault: true,
//     },
//   }
// );

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'localhost'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'postgres'),
      user: env('DATABASE_USERNAME', 'postgres'),
      password: env('DATABASE_PASSWORD', 'Amos0820*'),
      schema: env('DATABASE_SCHEMA', 'public'), // Not required
      ssl: false
    },
    debug: false,
  },
});
