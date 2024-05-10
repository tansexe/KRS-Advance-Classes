const express = require("express");
var bodyParser = require("body-parser");
const mongoose = require("mongoose");
const users = require("./routes/user");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type,Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );

  next();
});

app.use(bodyParser.json());

app.use("/users", users);

mongoose
  .connect(process.env.MONGO_DB_URL)
  .then(() => {
    console.log("Connected to Database");
    app.listen(process.env.PORT, () => {
      console.log("The server is started");
    });
  })
  .catch((err) => console.log("err"));
