const express = require("express");
const { body, query, param } = require("express-validator");
const { handleInputErrors } = require("../middleware/handleInputErrors");
const {
  createNewPoint,
  getAllPoints,
  getUniquePoint,
  updateUniquePoint,
  deleteUniquePoint,
} = require("../controllers/pointsController");
const router = express.Router();

router
  .route("/")
  .get(getAllPoints)
  .post(
    body("name").isString().notEmpty().withMessage("Field required"),
    body("lat").isLatLong().withMessage("Field required"),
    body("lng").isLatLong().withMessage("Field required"),
    body("siteId").isMongoId().withMessage("Field required"),
    handleInputErrors,
    createNewPoint
  );
router
  .route("/:pointId")
  .get(getUniquePoint)
  .patch(
    body("name").optional().isString(),
    body("lat").optional().isLatLong(),
    body("lng").optional().isLatLong(),
    handleInputErrors,
    updateUniquePoint
  )
  .delete(param("pointId").isMongoId(), handleInputErrors, deleteUniquePoint);

module.exports = router;
