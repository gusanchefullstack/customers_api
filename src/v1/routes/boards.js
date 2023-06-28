const express = require("express");
const { body, param } = require("express-validator");
const { handleInputErrors } = require("../middleware/handleInputErrors");
const {
  createNewBoard,
  getAllBoards,
  getUniqueBoard,
  updateUniqueBoard,
  deleteUniqueBoard,
} = require("../controllers/boardsController");
const router = express.Router();

router
  .route("/")
  .get(getAllBoards)
  .post(
    body("name").isString().notEmpty().withMessage("Field required"),
    body("active").isBoolean().withMessage("Field required"),
    body("pointId").isMongoId().withMessage("Field required"),
    handleInputErrors,
    createNewBoard
  );
router
  .route("/:boardId")
  .get(param("boardId").isMongoId(), getUniqueBoard)
  .patch(
    param("boardId").isMongoId(),
    body("name").optional().isString(),
    body("active").optional().isBoolean(),
    handleInputErrors,
    updateUniqueBoard
  )
  .delete(param("boardId").isMongoId(), handleInputErrors, deleteUniqueBoard);

module.exports = router;
