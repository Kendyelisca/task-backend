const {
  getAll,
  create,
  getOne,
  remove,
  update,
} = require("../controllers/task.controllers");
const express = require("express");

const taskRouter = express.Router();

taskRouter.route("/").get(getAll).post(create);

taskRouter.route("/:id").get(getOne).delete(remove).put(update);

module.exports = taskRouter;
