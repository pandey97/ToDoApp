import { GetToDoData, ToDoData } from "../../models/ToDoModel"
import { DELETE_TODO_DATA, SET_TODO_DATA } from "../actionConstants"
import { IBaseReducerInterface } from "./IBaseReducerInterface"

const INITIAL_STATE = {
    todoData: [],
}

interface IToDoReducer {
    todoData: ToDoData
}

const todoReducer = (
    state = INITIAL_STATE,
    action: IBaseReducerInterface<IToDoReducer>,
) => {
    const payload = action.payload;
    switch(action.type){
        case SET_TODO_DATA: {
            if (Array.isArray(payload)) {
                return {
                    ...state,
                    todoData: payload
                };
            }
            else{
                let filterData = state.todoData.filter((todo: GetToDoData) => todo._id !== action.payload._id);
                return {
                    todoData: [
                        ...filterData,
                        payload,
                    ],
                };
            }
        }
        case DELETE_TODO_DATA: {
            return {
                todoData: [
                    ...state.todoData.filter((todo: GetToDoData) => todo._id !== payload),
                ],
            };
        }
        default:
            return state;
    }
};

export default todoReducer;