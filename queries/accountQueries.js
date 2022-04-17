const Pool = require("pg").Pool;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    pool.query(
      "INSERT INTO accounts (first_name, last_name, email, hashed_password) VALUES ($1, $2, $3, $4)",
      [firstName, lastName, email, hash],
      (error) => {
        if (error) {
          return res.status(500).json({ error: error });
        }
        res.status(201).send("Account created");
      }
    );
  });
};

const loginAccount = (req, res) => {
  const { email, password } = req.body;
  pool.query("SELECT * FROM accounts WHERE email = $1", [email], (error, results) => {
    if (error) {
      return res.status(500).json({ error: error });
    }
    const accountPassword = results.rows[0].hashed_password;
    const accountId = results.rows[0].id;
    bcrypt.compare(password, accountPassword)
      .then((valid) => {
        if (!valid) {
          return res.status(403).json({ message: "Incorrect Password" });
        }
        const token = jwt.sign(
          { userId: accountId },
          "JWT_TOKEN",
          {
            expiresIn: "24h"
          }
        );

        return res.status(200).json({
          userId: accountId,
          token: token
        });
      }).catch(() => {
        return res.status(500).json({
          message: "Problem validating token"
        });
      });
  });
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
  deleteAccount,
  loginAccount
};
