const pointService = require("../services/pointService");

const getAllPoints = (req, res) => {
  const allPoints = pointService.getAllPoints();
  res.send("Get all Points");
};

const createNewPoint = (req, res) => {
  const createdPoint = pointService.createNewPoint();
  res.send("Create new Point");
};

const getUniquePoint = (req, res) => {
  const point = pointService.getOnePoint();
  res.send("Get single Point");
};

const updateUniquePoint = (req, res) => {
  const updatedPoint = pointService.updateOnePoint();
  res.send("Update single Point");
};

const deleteUniquePoint = (req, res) => {
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
