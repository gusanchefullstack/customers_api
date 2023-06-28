const express = require("express");
const { body, query, param } = require("express-validator");
const { handleInputErrors } = require("../middleware/handleInputErrors");
const {
  getAllSites,
  getUniqueSite,
  createNewSite,
  updateUniqueSite,
  deleteUniqueSite,
} = require("../controllers/sitesController");

const router = express.Router();

router
  .route("/")
  .get(getAllSites)
  .post(
    body("name").isString().notEmpty().withMessage("Field required"),
    body("address").isString().notEmpty().withMessage("Field required"),
    body("city").isString().notEmpty().withMessage("Field required"),
    body("state").isString().notEmpty().withMessage("Field required"),
    body("country").isString().notEmpty().withMessage("Field required"),
    body("organizationId").isMongoId().withMessage("Field required"),
    handleInputErrors,
    createNewSite
  );
router
  .route("/:siteId")
  .get(param("siteId").isMongoId(), handleInputErrors, getUniqueSite)
  .patch(
    param("siteId").isMongoId(),
    body("name").optional().isString().notEmpty(),
    body("address").optional().isString().notEmpty(),
    body("city").optional().isString().notEmpty(),
    body("state").optional().isString().notEmpty(),
    body("country").optional().isString().notEmpty(),
    body("organizationId").isMongoId().withMessage("Field required"),
    handleInputErrors,
    updateUniqueSite
  )
  .delete(param("siteId").isMongoId(), handleInputErrors, deleteUniqueSite);

module.exports = router;
