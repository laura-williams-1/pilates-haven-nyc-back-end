const db = require("../db/dbConfig");

const getAllStudios = async () => {
  try {
    const allStudios = await db.any("SELECT * FROM studios");
    return allStudios;
  } catch (error) {
    return error;
  }
};

const getAStudio = async (id) => {
  try {
    const studio = await db.one("SELECT * FROM studios WHERE id=$1", id);
    return studio;
  } catch (error) {
    return error;
  }
};
module.exports = {
  getAllStudios,
  getAStudio,
};
