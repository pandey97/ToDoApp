import Todo from "../models/todo.model.js";

export const putTodoControllerData = async (req, res) => {
    try {
        const { id, ...data } = req.body;
        let todo;
        if (id) {
            todo = await Todo.findByIdAndUpdate(id, data, { new: true });
        } else {
            todo = new Todo(data);
            await todo.save();
        }

        return res.status(200).send({
            success: true,
            message: id ? "Data updated successfully" : "Data created successfully",
            data: todo,
            onother: data,
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Error in ToDo post API",
            error: error.message,
        });
    }
};



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

export const editTodoControllerData = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, content } = req.body;

        const todo = await Todo.findByIdAndUpdate(
            id,
            { title, content },
            { new: true }
        );

        if (!todo) {
            return res.status(404).send({
                success: false,
                message: "ToDo item not found",
            });
        }

        return res.status(200).send({
            success: true,
            message: "ToDo item updated successfully",
            todo,
        });
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: "Error in ToDo update API",
            error,
        });
    }
};


export const deleteTodoControllerData = async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await Todo.findByIdAndDelete(id);

        if (!todo) {
            return res.status(404).send({
                success: false,
                message: "ToDo item not found",
                id: id
            });
        }

        return res.status(200).send({
            success: true,
            message: "ToDo item deleted successfully",
            todo,
        });
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: "Error in ToDo delete API",
            error,
        });
    }
};
