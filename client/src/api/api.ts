import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000/api",
});

export const login = (data: { email: string; password: string }) =>
  API.post(`/user/login`, data);
export const register = (data: {username:string;email: string; password: string}) => API.post("/user/register",data)