const getAllBoards = (req, res) => {
  res.send("Get all Boards");
};

const createNewBoard = (req, res) => {
  res.send("Create new Board");
};

const getUniqueBoard = (req, res) => {
  res.send("Get single Board");
};

const updateUniqueBoard = (req, res) => {
  res.send("Update single Board");
};

const deleteUniqueBoard = (req, res) => {
  res.send("Delete single Board");
};

module.exports = {
  getAllBoards,
  createNewBoard,
  getUniqueBoard,
  updateUniqueBoard,
  deleteUniqueBoard,
};
