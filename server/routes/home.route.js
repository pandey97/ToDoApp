import express from "express";
import {deleteTodoControllerData, editTodoControllerData, getTodoControllerData, putTodoControllerData} from "../controllers/home.controller.js";

const router = express.Router();

router.get('/get-todo', getTodoControllerData);
router.put('/put-todo', putTodoControllerData);
router.delete('/delete-todo/:id', deleteTodoControllerData);
router.put('/edit-todo', editTodoControllerData);

export default router;