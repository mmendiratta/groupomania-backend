const Pool = require("pg").Pool;
const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "groupomaniaDB",
  password: "password",
  port: 5438
});

const getAllAccounts = (_req, res) => {
  pool.query("SELECT * FROM accounts ORDER BY id ASC", (error, results) => {
    if (error) {
      return res.status(500).json({ error: error });
    }
    res.status(200).json(results.rows);
  });
};

const getAccountById = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query("SELECT * FROM accounts WHERE id = $1", [id], (error, results) => {
    if (error) {
      return res.status(500).json({ error: error });
    }
    res.status(200).json(results.rows);
  });
};

const createNewAccount = (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const hashedPassword = bcrypt.hash(password, 10);

  pool.query(
    "INSERT INTO accounts (first_name, last_name, email, hashed_password) VALUES ($1, $2, $3, $4)",
    [firstName, lastName, email, hashedPassword],
    (error, results) => {
      if (error) {
        return res.status(500).json({ error: error });
      }
      res.status(201).send("Account created");
    }
  );
};

const deleteAccount = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query("DELETE FROM accounts WHERE id = $1", [id], (error) => {
    if (error) {
      return res.status(500).json({ error: error });
    }
    res.status(200).send(`User deleted with ID: ${id}`);
  });
};

module.exports = {
  getAllAccounts,
  getAccountById,
  createNewAccount,
  deleteAccount
};
