const getAllPoints = (req, res) => {
  res.send("Get all Points");
};

const createNewPoint = (req, res) => {
  res.send("Create new Point");
};

const getUniquePoint = (req, res) => {
  res.send("Get single Point");
};

const updateUniquePoint = (req, res) => {
  res.send("Update single Point");
};

const deleteUniquePoint = (req, res) => {
  res.send("Delete single Point");
};

module.exports = {
  getAllPoints,
  createNewPoint,
  getUniquePoint,
  updateUniquePoint,
  deleteUniquePoint,
};
