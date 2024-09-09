import Todo from "../models/todo.model.js";

export const postTodoControllerData = async (req, res) => {
    try {
        const { title, content } = req.body;
        const todo = new Todo(req.body);
        await todo.save();
        return res.status(200).send({
            success: true,
            message: "Data saved Successfully",
            todo
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Error in ToDo post API",
            error,
          });
    }
}

export const getTodoControllerData = async (req, res) => {
    try {
        const todoData = await Todo.find();
        return res.status(200).send({
            success: true,
            message: "All data fetched successfully",
            data: todoData
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Error in ToDo get API",
            error,
          });
    }
}