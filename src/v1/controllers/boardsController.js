const boardService = require("../services/boardService");

const getAllBoards = (req, res) => {
  const allBoards = boardService.getAllBoards();
  res.send("Get all Boards");
};

const createNewBoard = (req, res) => {
  const createdBoard = boardService.createNewBoard();
  res.send("Create new Board");
};

const getUniqueBoard = (req, res) => {
  const board = boardService.getOneBoard();
  res.send("Get single Board");
};

const updateUniqueBoard = (req, res) => {
  const updatedBoard = boardService.updateOneBoard();
  res.send("Update single Board");
};

const deleteUniqueBoard = (req, res) => {
  boardService.deleteOneBoard();
  res.send("Delete single Board");
};

module.exports = {
  getAllBoards,
  createNewBoard,
  getUniqueBoard,
  updateUniqueBoard,
  deleteUniqueBoard,
};
