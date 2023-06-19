const express = require("express");
const {
  getAllOrgs,
  getUniqueOrg,
  createNewOrg,
  updateUniqueOrg,
  deleteUniqueOrg,
} = require("../controllers/organizationsControllers");

const router = express.Router();

router.route("/").get(getAllOrgs).post(createNewOrg);
router
  .route("/:orgId")
  .get(getUniqueOrg)
  .patch(updateUniqueOrg)
  .delete(deleteUniqueOrg);

module.exports = router;
