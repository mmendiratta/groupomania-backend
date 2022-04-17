const Pool = require("pg").Pool;
// const jwt = require("jsonwebtoken");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "groupomaniaDB",
  password: "password",
  port: 5438
});

const getAllFeedPosts = (_req, res) => {
  pool.query("SELECT * FROM account_feed_posts", (error, results) => {
    if (error) {
      return res.status(500).json({ error: error });
    }
    res.status(200).json(results.rows);
  });
};

const createNewPost = (req, res) => {
  // TODO: image id
  const { accountId, title, textBody } = req.body;
  pool.query("INSERT INTO posts (account_id, title, text_body) VALUES ($1, $2, $3) RETURNING id", [accountId, title, textBody], (error, results) => {
    if (error) {
      return res.status(500).json({ error: error });
    }

    const currentDateTime = new Date();
    console.log("postid", results.rows[0].id);
    console.log("accountId", accountId);
    pool.query("INSERT INTO account_feed_posts (account_id, post_id, viewed_date) VALUES ($1, $2, $3)", [accountId, results.rows[0].id, currentDateTime], (error) => {
      if (error) {
        return res.status(500).json({ error: error });
      }
      res.status(201).send("Post created and linked with account");
    });
  });
};

const deletePost = (req, res) => {
  const { postId } = req.body;
  pool.query("DELETE FROM posts WHERE id = $1", [postId], (error) => {
    if (error) {
      return res.status(500).json({ error: error });
    }
    res.status(200).send(`Post deleted with ID: ${postId}`);
  });
};

module.exports = {
  getAllFeedPosts,
  createNewPost,
  deletePost
};
