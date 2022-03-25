const express = require("express");

const accountController = require("../controllers/accountController")
const router = express.Router();

router.post(); // create new account
router.post(); // sign in to account
router.put(); // update account
router.get(); // get account info
router.delete(); // delete account 

module.exports = router;