const express = require("express");
const studios = express.Router();
const { getAllStudios, getAStudio } = require("../queries/studios");

studios.get("/", async (req, res) => {
  const allStudios = await getAllStudios();

  if (allStudios[0]) {
    res.status(200).json(allStudios);
  } else {
    res.status(500).json({ error: "Server Error" });
  }
});

studios.get("/:id", async (req, res) => {
  const { id } = req.params;
  const studio = await getAStudio(id);

  if (studio.id) {
    res.status(200).json(studio);
  } else {
    res.status(500).json({ error: "Service Error" });
  }
});
module.exports = studios;
