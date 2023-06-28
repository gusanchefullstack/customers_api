const boardService = require("../services/boardService");

const getAllBoards = async (req, res, next) => {
  const allBoards = boardService.getAllBoards();
  res.send("Get all Boards");
};

const createNewBoard = async (req, res, next) => {
  const createdBoard = boardService.createNewBoard();
  res.send("Create new Board");
};

const getUniqueBoard = async (req, res, next) => {
  const board = boardService.getOneBoard();
  res.send("Get single Board");
};

const updateUniqueBoard = async (req, res, next) => {
  const updatedBoard = boardService.updateOneBoard();
  res.send("Update single Board");
};

const deleteUniqueBoard = async (req, res, next) => {
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
