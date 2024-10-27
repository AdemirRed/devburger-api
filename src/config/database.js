/* eslint-disable prettier/prettier */
module.exports = {
  dialect: 'postgres',
  // url: 'postgresql://postgres:biOAWvVqNmjBxdHLXqylPgEjyOXGFhCP@junction.proxy.rlwy.net:56896/railway',
   host: 'localhost',
   port: 5432,
   username: 'postgres',
   password: 'postgres',
   database: 'devburger',
  define: {
    timestamps: true,
    underscored: true,

    underscoredAll: true,
  },
};
