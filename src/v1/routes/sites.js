const express = require("express");
const {
  getAllSites,
  getUniqueSite,
  createNewSite,
  updateUniqueSite,
  deleteUniqueSite,
} = require("../controllers/sitesController");

const router = express.Router();

router.route("/").get(getAllSites).post(createNewSite);
router
  .route("/:siteId")
  .get(getUniqueSite)
  .patch(updateUniqueSite)
  .delete(deleteUniqueSite);

module.exports = router;
