import APIConstants from "../core/ApiConstants";
import { ToDoData } from "../models/ToDoModel";
import { sendGetRequest } from "../services/network/Network";
import LocalString from "../shared/localization/localEnums";

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