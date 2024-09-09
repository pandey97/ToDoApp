const APIConstants = {
  axiosCallTimeout: 30000,
  axiosCallRetryCount: 2,
  axiosCallRetryTimeout: 5000,
  BaseURL: "http://localhost:8080/api/",
  SetUser: "auth/register",
  GetUser: "auth/login",
  GetTodo: "home/get-todo"
};

export default APIConstants;