import mongoose, { Mongoose } from "mongoose";

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "title is required"]
    },
    content: {
        type: String,
        required: [true, "content is required"]
    }
}, { timestamps: true });

const Todo = mongoose.model('Todo', todoSchema);

export default Todo;