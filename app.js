const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const mongoose = require("mongoose");
const users = require("./routes/users");
const config = require("./config/db");
const passportAuth = require("./config/passport");

// Connect to database
mongoose.connect(config.mongodb);

// On connection
mongoose.connection.on("connected", () => {
  console.log(`Connected to database${config.mongodb}`);
});

// On error
mongoose.connection.on("error", (err) => {
  console.log(`database error ${err}`);
});

const app = express();

const port = process.env.PORT || 6200;

// Cors middleware
app.use(cors());

// Set static folder
app.use(express.static(path.join(__dirname, "../public")));

// Body Parser middleware
app.use(bodyParser.json());

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());
passportAuth(passport);

app.use("/users", users);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// Start server
app.listen(port, () => {
  console.log(`server start on ${port}`);
});
