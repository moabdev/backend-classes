const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todoController");

// Definindo as rotas para as operações CRUD
router.post("/", todoController.createTodo);
router.get("/", todoController.getTodos);
router.get("/:id", todoController.getTodoById);
router.put("/:id", todoController.updateTodo);
router.delete("/:id", todoController.deleteTodo);

module.exports = router;
