const express = require("express");
const feedPostQueries = require("../queries/feedPostQueries");
const router = express.Router();
const auth = require("../middleware/auth");

router.get("/", auth, feedPostQueries.getAllFeedPosts);
router.post("/", auth, feedPostQueries.createNewPost);
router.delete("/", auth, feedPostQueries.deletePost);
router.post("/view", auth, feedPostQueries.addToLinkTable);
module.exports = router;
