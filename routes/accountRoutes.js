const express = require("express");
const accountQueries = require("../queries/accountQueries");
const router = express.Router();
const auth = require("../middleware/auth");

router.post("/", accountQueries.createNewAccount); // create new account
router.post("/login", accountQueries.loginAccount); // sign in to account
router.get("/", accountQueries.getAllAccounts); // get all account info
router.get("/:id", auth, accountQueries.getAccountById); // get selected account info
router.delete("/:id", auth, accountQueries.deleteAccount); // delete account

module.exports = router;
