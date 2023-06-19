const express = require("express");
const {
  createNewPoint,
  getAllPoints,
  getUniquePoint,
  updateUniquePoint,
  deleteUniquePoint,
} = require("../controllers/pointsController");
const router = express.Router();

router.route("/").get(getAllPoints).post(createNewPoint);
router
  .route("/:pointId")
  .get(getUniquePoint)
  .patch(updateUniquePoint)
  .delete(deleteUniquePoint);

  module.exports = router;