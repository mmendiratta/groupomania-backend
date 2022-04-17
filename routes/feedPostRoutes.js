const express = require("express");
const feedPostQueries = require("../queries/feedPostQueries");
const router = express.Router();
// const auth = require("../middleware/auth");

// TODO: add auth
router.get("/", feedPostQueries.getAllFeedPosts);
router.post("/", feedPostQueries.createNewPost);
router.delete("/", feedPostQueries.deletePost);
module.exports = router;
