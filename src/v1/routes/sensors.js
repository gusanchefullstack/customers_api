const express = require("express");
const { body, param } = require("express-validator");
const { handleInputErrors } = require("../middleware/handleInputErrors");
const {
  getAllSensors,
  getUniqueSensor,
  createNewSensor,
  updateUniqueSensor,
  deleteUniqueSensor,
} = require("../controllers/sensorsController");

const router = express.Router();

router
  .route("/")
  .get(getAllSensors)
  .post(
    body("boardId").isMongoId().withMessage("Field required"),
    body("type").isString().notEmpty().withMessage("Field required"),
    handleInputErrors,
    createNewSensor
  );
router
  .route("/:sensorId")
  .get(param("sensorId").isMongoId(), handleInputErrors, getUniqueSensor)
  .patch(
    param("sensorId").isMongoId(),
    body("type").optional().isString().notEmpty(),
    handleInputErrors,
    updateUniqueSensor
  )
  .delete(param("sensorId").isMongoId(), handleInputErrors, deleteUniqueSensor);

module.exports = router;
