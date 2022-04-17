const express = require("express");
const bodyParser = require("body-parser");
const accountRouter = require("./routes/accountRoutes");
const feedRouter = require("./routes/feedPostRoutes");
// const path = require("path");

const app = express();

app.use("", (_req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(bodyParser.json());
app.use("/groupomania/accounts/v1", accountRouter);
app.use("/groupomania-feed/v1/", feedRouter);

module.exports = app;
