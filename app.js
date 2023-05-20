const express = require("express");
const cors = require("cors");
const app = express();
const studiosController = require("./Controllers/studioController");

app.use(cors());
app.use(express.json());

app.use("/studios", studiosController);

app.get("/", (req, res) => {
  app.status(200).response("Welcome to the NYC Pilates Haven");
});

app.get("*", (req, res) => {
  app.status(400).response("Cant't find this site, try again!");
});

module.exports = app;
