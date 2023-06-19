const sensorService = require("../services/sensorService");

const getAllSensors = (req, res) => {
  const allSensors = sensorService.getAllSensors();
  res.send("Get all Sensors");
};

const createNewSensor = (req, res) => {
  const createdSensor = sensorService.createNewSensor();
  res.send("Create new Sensor");
};

const getUniqueSensor = (req, res) => {
  const sensor = sensorService.getOneSensor();
  res.send("Get single Sensor");
};

const updateUniqueSensor = (req, res) => {
  const updatedSensor = sensorService.updateOneSensor();
  res.send("Update single Sensor");
};

const deleteUniqueSensor = (req, res) => {
  sensorService.deleteOneSensor();
  res.send("Delete single Sensor");
};

module.exports = {
  getAllSensors,
  createNewSensor,
  getUniqueSensor,
  updateUniqueSensor,
  deleteUniqueSensor,
};
