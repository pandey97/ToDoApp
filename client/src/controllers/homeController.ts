import APIConstants from "../core/ApiConstants";
import { GetToDoData, ToDoData } from "../models/ToDoModel";
import { deleteRequest, sendGetRequest, sendPostRequest, sendPutRequest } from "../services/network/Network";
import LocalString from "../shared/localization/localEnums";

export const AddTodoData = async (item:GetToDoData) => {
  try {
    console.log("AddTodoData",item);
    const response = await sendPutRequest<ToDoData>(APIConstants.SendTodo,item);
    console.log("response",response)
    if (response.isSuccess) {
      return response;
    } else return response.errors;
  } catch (e) {
    return LocalString.serverError;
  }
};

export const GetTodoData = async () => {
    try {
      const response = await sendGetRequest<ToDoData>(APIConstants.GetTodo);
      if (response.isSuccess) {
        return response;
      } else return response.errors;
    } catch (e) {
      return LocalString.serverError;
    }
};

export const DeleteToDoData = async (id:string) => {
  try{
    console.log(id);
    const response = await deleteRequest<ToDoData>(`${APIConstants.DeleteToDo}/${id}`);
    if (response.isSuccess) {
      return response;
    } else return response.errors;
  } catch (e) {
    return LocalString.serverError;
  }
}