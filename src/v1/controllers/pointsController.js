const pointService = require("../services/pointService");

const getAllPoints = async (req, res, next) => {
  const allPoints = pointService.getAllPoints();
  res.send("Get all Points");
};

const createNewPoint = async (req, res, next) => {
  const createdPoint = pointService.createNewPoint();
  res.send("Create new Point");
};

const getUniquePoint = async (req, res, next) => {
  const point = pointService.getOnePoint();
  res.send("Get single Point");
};

const updateUniquePoint = async (req, res, next) => {
  const updatedPoint = pointService.updateOnePoint();
  res.send("Update single Point");
};

const deleteUniquePoint = async (req, res, next) => {
  pointService.deleteOnePoint();
  res.send("Delete single Point");
};

module.exports = {
  getAllPoints,
  createNewPoint,
  getUniquePoint,
  updateUniquePoint,
  deleteUniquePoint,
};
