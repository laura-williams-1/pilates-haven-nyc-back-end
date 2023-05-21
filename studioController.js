const express = require("express");
const studios = express.Router();
const {
  getAllStudios,
  getAStudio,
  createAStudio,
  updateStudio,
  deleteStudio,
} = require("../queries/studios");

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

studios.post("/", async (req, res) => {
  const newStudio = req.body;
  try {
    const addedStudio = await createAStudio(newStudio);
    res.status(200).json(addedStudio);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

studios.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  try {
    const editStudio = await updateStudio(id, body);
    res.status(200).json(editStudio);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

studios.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deletedStudio = await deleteStudio(id);
    res.status(200).json(deletedStudio);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

module.exports = studios;
