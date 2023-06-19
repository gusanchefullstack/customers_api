const getAllSensors = (req, res) => {
  res.send("Get all Sensors");
};

const createNewSensor = (req, res) => {
  res.send("Create new Sensor");
};

const getUniqueSensor = (req, res) => {
  res.send("Get single Sensor");
};

const updateUniqueSensor = (req, res) => {
  res.send("Update single Sensor");
};

const deleteUniqueSensor = (req, res) => {
  res.send("Delete single Sensor");
};

module.exports = {
  getAllSensors,
  createNewSensor,
  getUniqueSensor,
  updateUniqueSensor,
  deleteUniqueSensor,
};
