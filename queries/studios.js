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

const createAStudio = async (studioToAdd) => {
  try {
    const newStudio = await db.any(
      "INSERT INTO studios (name, address, zipcode, city, state, phone_number, email, website_url, instagram_handle,description,specialization, offers_group, offers_mat,offers_reformer, offers_duets, offers_privates, offers_membership,offers_new_client_deal,is_black_owned) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18 ,$19)",
      [
        studioToAdd.name,
        studioToAdd.address,
        studioToAdd.zipcode,
        studioToAdd.city,
        studioToAdd.state,
        studioToAdd.phone_number,
        studioToAdd.email,
        studioToAdd.website_url,
        studioToAdd.instagram_handle,
        studioToAdd.description,
        studioToAdd.specialization,
        studioToAdd.offers_group,
        studioToAdd.offers_mat,
        studioToAdd.offers_reformer,
        studioToAdd.offers_duets,
        studioToAdd.offers_privates,
        studioToAdd.offers_membership,
        studioToAdd.offers_new_client_deal,
        studioToAdd.is_black_owned,
      ]
    );
    return newStudio;
  } catch (error) {
    return error;
  }
};

const updateStudio = async (id, studio) => {
  const {
    name,
    address,
    zipcode,
    city,
    state,
    phone_number,
    email,
    website_url,
    instagram_handle,
    description,
    specialization,
    offers_group,
    offers_mat,
    offers_reformer,
    offers_duets,
    offers_privates,
    offers_membership,
    offers_new_client_deal,
    is_black_owned,
  } = studio;

  try {
    editedStudio = await db.one(
      "UPDATE studios SET name =$1, address =$2, zipcode =$3, city =$4, state =$5, phone_number =$6, email =$7, website_url =$8, instagram_handle =$9, description =$10, specialization =$11, offers_group =$12, offers_mat =$13, offers_reformer =$14, offers_duets =$15, offers_privates =$16 , offers_membership =$17, offers_new_client_deal =$18, is_black_owned =$19 WHERE id=$20 RETURNING *",
      [
        name,
        address,
        zipcode,
        city,
        state,
        phone_number,
        email,
        website_url,
        instagram_handle,
        description,
        specialization,
        offers_group,
        offers_mat,
        offers_reformer,
        offers_duets,
        offers_privates,
        offers_membership,
        offers_new_client_deal,
        is_black_owned,
        id,
      ]
    );
    return editedStudio;
  } catch (error) {
    return error;
  }
};

const deleteStudio = async (id) => {
  try {
    const deletedStudio = await db.one(
      "DELETE FROM studios WHERE id=$1 RETURNINF *",
      id
    );
    return deletedStudio;
  } catch (error) {
    return error;
  }
};
module.exports = {
  getAllStudios,
  getAStudio,
  createAStudio,
  updateStudio,
  deleteStudio,
};
