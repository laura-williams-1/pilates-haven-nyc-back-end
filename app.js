const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  app.status(200).response("Welcome to the NYC Pilates Haven");
});

app.get("*", (req, res) => {
  app.status(400).response("Welcome to the NYC Pilates Haven");
});

module.exports = app;
