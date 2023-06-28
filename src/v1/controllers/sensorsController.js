const sensorService = require("../services/sensorService");

const getAllSensors = async (req, res, next) => {
  const allSensors = sensorService.getAllSensors();
  res.send("Get all Sensors");
};

const createNewSensor = async (req, res, next) => {
  const createdSensor = sensorService.createNewSensor();
  res.send("Create new Sensor");
};

const getUniqueSensor = async (req, res, next) => {
  const sensor = sensorService.getOneSensor();
  res.send("Get single Sensor");
};

const updateUniqueSensor = async (req, res, next) => {
  const updatedSensor = sensorService.updateOneSensor();
  res.send("Update single Sensor");
};

const deleteUniqueSensor = async (req, res, next) => {
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
