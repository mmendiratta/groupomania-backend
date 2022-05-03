const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "groupomaniaDB",
  password: "password",
  port: 5438
});

const getAllFeedPosts = (_req, res) => {
  pool.query("SELECT * FROM posts", (error, results) => {
    if (error) {
      return res.status(500).json({ error: error });
    }
    res.status(200).json(results.rows);
  });
};

const getAllLinkedSeenPosts = (_req, res) => {
  pool.query("SELECT * FROM account_feed_posts", (error, results) => {
    if (error) {
      return res.status(500).json({ error: error });
    }
    res.status(200).json(results.rows);
  });
  res.status(201).send("Post viewed");
};

const addToLinkTable = (req, res) => {
  const { accountId, postId } = req.body;
  const currentDateTime = new Date();
  pool.query("INSERT INTO account_feed_posts (account_id, post_id, viewed_date) VALUES ($1, $2, $3)", [accountId, postId, currentDateTime], (error) => {
    if (error) {
      return res.status(500).json({ error: error });
    }
    res.status(201).send("Link updated");
  });
};

const createNewPost = (req, res) => {
  const { accountId, title, textBody, imageId } = req.body;
  pool.query("INSERT INTO posts (account_id, title, text_body, image_id) VALUES ($1, $2, $3, $4) RETURNING id", [accountId, title, textBody, imageId], (error, results) => {
    if (error) {
      return res.status(500).json({ error: error });
    }

    res.status(201).send(`Post created with ID: ${results.rows[0].id}`);
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
  getAllLinkedSeenPosts,
  addToLinkTable,
  createNewPost,
  deletePost
};
