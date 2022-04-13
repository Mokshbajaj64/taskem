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
