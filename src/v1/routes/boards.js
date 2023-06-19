const express = require("express");
const {
  createNewBoard,
  getAllBoards,
  getUniqueBoard,
  updateUniqueBoard,
  deleteUniqueBoard,
} = require("../controllers/boardsController");
const router = express.Router();

router.route("/").get(getAllBoards).post(createNewBoard);
router
  .route("/:boardId")
  .get(getUniqueBoard)
  .patch(updateUniqueBoard)
  .delete(deleteUniqueBoard);

module.exports = router;
