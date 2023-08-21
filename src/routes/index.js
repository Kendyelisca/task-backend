const express = require("express");
const taskRouter = require("./task.router");
const router = express.Router();

// colocar las rutas aquí

router.use("/tasks", taskRouter);

module.exports = router;
