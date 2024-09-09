import { IApiResponse } from "../../models/IApiResponse";
import { ToDoData } from "../../models/ToDoModel";
import { SET_TODO_DATA } from "../actionConstants";


export const setToDoData = (todo: IApiResponse<ToDoData>) => {
  return {
    type: SET_TODO_DATA,
    payload: todo,
  };
};