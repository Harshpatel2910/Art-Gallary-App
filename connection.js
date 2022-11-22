const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "admin",
  database: "202001177_db",
});

module.exports = pool;
