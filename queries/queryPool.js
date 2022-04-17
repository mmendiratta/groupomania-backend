const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "groupomaniaDB",
  password: "password",
  port: 5438
});

module.exports = {
  pool
};
