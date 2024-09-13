const APIConstants = {
  axiosCallTimeout: 30000,
  axiosCallRetryCount: 2,
  axiosCallRetryTimeout: 5000,
  BaseURL: "http://localhost:8080/api/",
  SetUser: "auth/register",
  GetUser: "auth/login",
  SendTodo: "home/put-todo",
  GetTodo: "home/get-todo",
  DeleteToDo: "home/delete-todo"
};

export default APIConstants;