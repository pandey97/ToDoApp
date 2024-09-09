import APIConstants from "../core/ApiConstants";
import { RegisterUserData, RegisterUser, LoginUserData, LoginUser } from "../models/UserModel";
import { sendGetRequest, sendPostRequest } from "../services/network/Network";
import LocalString from "../shared/localization/localEnums";

export const SetUserDetail = async (data:RegisterUserData) => {
  try {
    const response = await sendPostRequest<RegisterUser>(APIConstants.SetUser,data);
    if (response.isSuccess) {
      return response;
    } else return response.errors;
  } catch (e) {
    return LocalString.serverError;
  }
};

export const GetUserDetail = async (data:LoginUserData) => {
    try {
      console.log(data);
      const response = await sendPostRequest<LoginUser>(APIConstants.GetUser,data);
      console.log(response);
      if (response.isSuccess) {
        return response;
      } else return response.errors;
    } catch (e) {
      return LocalString.serverError;
    }
  };