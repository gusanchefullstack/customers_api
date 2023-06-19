const siteService = require("../services/siteService");

const getAllSites = (req, res) => {
  const allSites = siteService.getAllSites();
  res.send("Get all Sites");
};

const createNewSite = (req, res) => {
  const createdSite = siteService.createNewSite();
  res.send("Create new Site");
};

const getUniqueSite = (req, res) => {
  const site = siteService.getOneSite();
  res.send("Get single Site");
};

const updateUniqueSite = (req, res) => {
  const updatedSite = siteService.updateOneSite();
  res.send("Update single Site");
};

const deleteUniqueSite = (req, res) => {
  siteService.deleteOneSite();
  res.send("Delete single Site");
};

module.exports = {
  getAllSites,
  createNewSite,
  getUniqueSite,
  updateUniqueSite,
  deleteUniqueSite,
};
