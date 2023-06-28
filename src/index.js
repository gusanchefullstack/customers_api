const express = require("express");
const v1Router = require("./v1/routes/index");
const dotenv = require("dotenv");
const { boomErrorHandler } = require("./v1/middleware/errorHandler");

const port = 3000;

const app = express();

app.use(express.json());
app.use("/api/v1", v1Router);
app.use(boomErrorHandler);

app.listen(port, console.log(`Customer API started at port ${port}`));
