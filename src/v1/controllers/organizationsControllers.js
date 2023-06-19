const organizationService = require("../services/organizationService");

const getAllOrgs = (req, res) => {
  const allOrgs = organizationService.getAllOrgs();
  res.send("Get all organizations");
};

const getUniqueOrg = (req, res) => {
  const org = organizationService.getOneOrg();
  res.json({ id: req.params.orgId });
};

const createNewOrg = (req, res) => {
  const createdOrg = organizationService.createNewOrg();
  res.send("Create new org");
};

const updateUniqueOrg = (req, res) => {
  const updatedOrg = organizationService.updateOneOrg();
  res.send("Update single organization");
};

const deleteUniqueOrg = (req, res) => {
  organizationService.deleteOneOrg();
  res.send("Delete single organization");
};

module.exports = {
  getAllOrgs,
  createNewOrg,
  getUniqueOrg,
  updateUniqueOrg,
  deleteUniqueOrg,
};
