const getAllOrgs = (req, res) => {
  res.send("Get all organizations");
};

const createNewOrg = (req, res) => {
  res.send("Create new org");
};

const getUniqueOrg = (req, res) => {
  res.send("Get single organization");
};

const updateUniqueOrg = (req, res) => {
  res.send("Update single organization");
};

const deleteUniqueOrg = (req, res) => {
  res.send("Delete single organization");
};

module.exports = {
  getAllOrgs,
  createNewOrg,
  getUniqueOrg,
  updateUniqueOrg,
  deleteUniqueOrg,
};
