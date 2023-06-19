const express = require("express");
const organizationsRouter = require("./organizations");
const sitesRouter = require("./sites");
const pointsRouter = require("./points");
const boardsRouter = require("./boards");
const sensorsRouter = require("./sensors");

const router = express.Router();

router.use("/organizations", organizationsRouter);
router.use("/sites", sitesRouter);
router.use("/points", pointsRouter);
router.use("/boards", boardsRouter);
router.use("/sensors", sensorsRouter);

module.exports = router;
