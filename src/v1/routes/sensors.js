const express = require("express");
const {
  getAllSensors,
  getUniqueSensor,
  createNewSensor,
  updateUniqueSensor,
  deleteUniqueSensor,
} = require("../controllers/sensorsController");

const router = express.Router();

router.route("/").get(getAllSensors).post(createNewSensor);
router
  .route("/:sensorId")
  .get(getUniqueSensor)
  .patch(updateUniqueSensor)
  .delete(deleteUniqueSensor);

module.exports = router;
