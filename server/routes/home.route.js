import express from "express";
import {getTodoControllerData, postTodoControllerData} from "../controllers/home.controller.js";

const router = express.Router();

router.get('/get-todo', getTodoControllerData);
router.post('/post-todo', postTodoControllerData);

export default router;