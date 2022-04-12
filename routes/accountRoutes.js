const express = require("express");

const accountQueries = require("../queries/queries");
const router = express.Router();

router.post("/create", accountQueries.createNewAccount); // create new account
// router.post("/login", accountQueries.); // sign in to account
router.get("/", accountQueries.getAllAccounts); // get account info
router.delete("/", accountQueries.deleteAccount); // delete account

module.exports = router;
