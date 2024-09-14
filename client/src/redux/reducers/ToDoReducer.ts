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
    switch(action.type){
        case SET_TODO_DATA: {
            const payload = action.payload;
            if (Array.isArray(payload?.data)) {
                return {
                    ...state,
                    todoData: {
                        ...payload,
                    },
                };
            }
            else{
                console.log(action.payload);
                let filterData = state.todoData.data.filter((todo: GetToDoData) => todo._id !== action.payload._id);
                console.log("filterData",filterData);
                return {
                    ...state,
                    todoData: {
                        ...state.todoData,
                        data: [...filterData, payload],
                    },
                };
            }
        }
        case DELETE_TODO_DATA: {
            return {
                ...state,
                todoData: {
                    ...state.todoData,
                    data: state.todoData.data.filter((todo: GetToDoData) => todo._id !== action.payload),
                },
            };
        }
        default:
            return state;
    }
};

export default todoReducer;