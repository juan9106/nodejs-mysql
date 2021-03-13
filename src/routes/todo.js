const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todo.controller');

router.get("/", todoController.list);
router.post("/add", todoController.store);
router.delete("/delete/:id", todoController.delete);
router.get("/edit/:id", todoController.edit);
router.put("/update/:id", todoController.update);
router.put("/status/:id", todoController.updateStatus);

module.exports = router;