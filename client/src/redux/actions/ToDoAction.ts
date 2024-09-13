import { IApiResponse } from "../../models/IApiResponse";
import { ToDoData } from "../../models/ToDoModel";
import { DELETE_TODO_DATA, SET_TODO_DATA } from "../actionConstants";


export const setToDoData = (todo: IApiResponse<ToDoData>) => {
  return {
    type: SET_TODO_DATA,
    payload: todo,
  };
};

export const deleteToDoData = (id: IApiResponse<string>) => {
  return {
    type: DELETE_TODO_DATA,
    payload: id,
  };
};