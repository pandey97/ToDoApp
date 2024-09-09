import { ToDoData } from "../../models/ToDoModel"
import { SET_TODO_DATA } from "../actionConstants"
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
    switch(action.type){
        case SET_TODO_DATA: {
            return {
                ...state,
                todoData: action.payload
            }
        }
        default:
            return state;
    }
};

export default todoReducer;