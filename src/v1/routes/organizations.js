const express = require("express");
const { body, query, param } = require("express-validator");
const { handleInputErrors } = require("../middleware/handleInputErrors");

const {
  getAllOrgs,
  getUniqueOrg,
  createNewOrg,
  updateUniqueOrg,
  deleteUniqueOrg,
} = require("../controllers/organizationsControllers");

const router = express.Router();

router
  .route("/")
  .get(getAllOrgs)
  .post(
    body("name").isString().notEmpty().withMessage("Field required"),
    body("nit")
      .isString()
      .notEmpty()
      .withMessage("Field required")
      .isLength({ min: 9, max: 9 })
      .withMessage("Tax ID invalid"),
    body("address").isString().notEmpty().withMessage("Field required"),
    body("city").isString().notEmpty().withMessage("Field required"),
    body("state").isString().notEmpty().withMessage("Field required"),
    body("country").isString().notEmpty().withMessage("Field required"),
    handleInputErrors,
    createNewOrg
  );
router
  .route("/:orgId")
  .get(param("orgId").isMongoId(), handleInputErrors, getUniqueOrg)
  .patch(
    param("orgId").isMongoId(),
    body("name").optional().isString().notEmpty(),
    body("nit")
      .optional()
      .isString()
      .notEmpty()
      .isLength({ min: 9, max: 9 })
      .withMessage("Tax ID invalid"),
    body("address").optional().isString().notEmpty(),
    body("city").optional().isString().notEmpty(),
    body("state").optional().isString().notEmpty(),
    body("country").optional().isString().notEmpty(),
    handleInputErrors,
    updateUniqueOrg
  )
  .delete(param("orgId").isMongoId(), handleInputErrors, deleteUniqueOrg);

module.exports = router;
