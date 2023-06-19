const express = require("express");
const v1Router = require("./v1/routes/index");

const port = 3000;

const app = express();

app.use(express.json());
app.use("/api/v1", v1Router);

app.listen(port, console.log(`Customer API started at port ${port}`));
