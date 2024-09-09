import { combineReducers, createStore } from "redux";
import todoReducer from "../reducers/ToDoReducer";

const reducers = combineReducers({
    todoData: todoReducer
})

const store = createStore(reducers);

export default store;
export type RootState = ReturnType<typeof reducers>;