const express = require("express");

const accountQueries = require("../queries/queries");
const router = express.Router();

router.post("/", accountQueries.createNewAccount); // create new account
// router.post("/login", accountQueries.); // sign in to account
router.get("/", accountQueries.getAllAccounts); // get account info
router.delete("/:id", accountQueries.deleteAccount); // delete account
router.get("/:id", accountQueries.getAccountById); // get account info

module.exports = router;
