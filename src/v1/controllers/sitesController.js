const getAllSites = (req, res) => {
  res.send("Get all Sites");
};

const createNewSite = (req, res) => {
  res.send("Create new Site");
};

const getUniqueSite = (req, res) => {
  res.send("Get single Site");
};

const updateUniqueSite = (req, res) => {
  res.send("Update single Site");
};

const deleteUniqueSite = (req, res) => {
  res.send("Delete single Site");
};

module.exports = {
  getAllSites,
  createNewSite,
  getUniqueSite,
  updateUniqueSite,
  deleteUniqueSite,
};
