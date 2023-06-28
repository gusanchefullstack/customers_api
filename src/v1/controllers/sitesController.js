const siteService = require("../services/siteService");

const getAllSites = async (req, res, next) => {
  const allSites = siteService.getAllSites();
  res.send("Get all Sites");
};

const createNewSite = async (req, res, next) => {
  const createdSite = siteService.createNewSite();
  res.send("Create new Site");
};

const getUniqueSite = async (req, res, next) => {
  const site = siteService.getOneSite();
  res.send("Get single Site");
};

const updateUniqueSite = async (req, res, next) => {
  const updatedSite = siteService.updateOneSite();
  res.send("Update single Site");
};

const deleteUniqueSite = async (req, res, next) => {
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
