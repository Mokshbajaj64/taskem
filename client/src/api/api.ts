import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000/api",
});

export const login = (data: { email: string; password: string }) =>
  API.post(`/user/login`, data);
export const register = (data: {
  username: string;
  email: string;
  password: string;
}) => API.post("/user/register", data);
export const getUser = (token: string) =>
  API.get("/user/profile", {
    headers: {
      token: token,
    },
  });
export const updateUser = (
  data: { username: string; email: string; bio: string },
  token: string
) =>
  API.put("/user/update_profile", data, {
    headers: {
      token: token,
    },
  });

export const getTodayTasks = (token: string) =>
  API.get("/task/today", {
    headers: {
      token: token,
    },
  });

export const createTodayTask = (
  data: { title: string; description: string },
  token: string
) =>
  API.post("/task/today", data, {
    headers: {
      token: token,
    },
  });

export const deleteTodayTask = (token: string,taskId: string) => API.delete(`/task/today/${taskId}`,{
  headers:{
    "token":token
  }
})

export const updateTodayTask = (data:{title: string; description: string},token: string,taskId: string) => API.put(`/task/today/${taskId}`,data,{
  headers:{
    "token":token
  }
})