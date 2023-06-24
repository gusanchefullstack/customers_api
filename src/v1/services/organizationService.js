const orgDb = require("../database/Organization");

const getAllOrgs = async () => {
  try {
    const allOrgs = await orgDb.getAllOrgs();
    return allOrgs;
  } catch (error) {
    throw error;
  }
};

const getOneOrg = async (orgId) => {
  try {
    const org = await orgDb.getUniqueOrg(orgId);
    return org;
  } catch (error) {
    throw error;
  }
};

const createNewOrg = async (org) => {
  try {
    const createdOrg = await orgDb.createOrg(org);
    return createdOrg;
  } catch (error) {
    throw error;
  }
};

const updateOneOrg = async (orgId, data) => {
  try {
    const updatedOrg = await orgDb.updateUniqueOrg(orgId, data);
    return updatedOrg;
  } catch (error) {
    throw error;
  }
};

const deleteOrg = async (orgId) => {
  try {
    const deletedOrg = await orgDb.deleteOrg(orgId);
    return deletedOrg;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllOrgs,
  getOneOrg,
  createNewOrg,
  updateOneOrg,
  deleteOrg,
};
