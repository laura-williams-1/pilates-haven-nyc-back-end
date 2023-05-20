const express = require("express");
const studios = express.Router();
const { getAllStudios } = require("../queries/products");

studios.get("/", async (req, res) => {
  const allStudios = await getAllStudios();

  if (allStudios) {
    res.status(200).json(allStudios);
  } else {
    res.status(500).json({ error: "Server Error" });
  }
});
