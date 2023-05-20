const express = require("express");
const cors = require("cors");
const app = express();
const studiosController = require("./Controllers/productsController");

app.use(cors());
app.use(express.json());

app.use("/studios", studios);

app.get("/", (req, res) => {
  app.status(200).response("Welcome to the NYC Pilates Haven");
});

app.get("*", (req, res) => {
  app.status(400).response("Cant't find this site, try again!");
});

module.exports = app;
