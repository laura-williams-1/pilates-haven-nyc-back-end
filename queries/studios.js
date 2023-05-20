const db = require("../db/dbCongif.js");

const getAllStudios = async () => {
  try {
    const allStudios = await db.any("SELECT * FROM studios");
    return allStudios;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllStudios,
};
