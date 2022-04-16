import * as api from "../api/api";
import { Dispatch } from "redux";
import { toast } from "react-toastify";

export const login =
  (databoi: { email: string; password: string }, setLoading: any) =>
  async (dispatch: Dispatch) => {
    const { data } = await api.login(databoi);
    if (data?.error) {
      setLoading(false);
      toast.error(data.error, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      setLoading(false);
      window.location.href = "/app/today";
      dispatch({
        type: "LOGIN",
        data,
      });
    }
  };

export const register =
  (
    databoi: { username: string; email: string; password: string },
    setLoading: any
  ) =>
  async (dispatch: Dispatch) => {
    const { data } = await api.register(databoi);
    if (data?.error) {
      setLoading(false);
      toast.error(data.error, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      setLoading(false);
      toast.success("User created now login :)", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      window.location.href = "/login";
    }
  };

export const getUser =
  (token: string, navigate: any, setLoading: any) =>
  async (dispatch: Dispatch) => {
    const { data } = await api.getUser(token);
    if (data?.error) {
      toast.error(data.error, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      navigate("/login");
      localStorage.removeItem("token");
      setLoading(false);
    } else {
      setLoading(false);
      dispatch({
        type: "GET_USER",
        data,
      });
    }
  };

export const updateUser =
  (databoi: { username: string; email: string; bio: string }, token: string) =>
  async (dispatch: Dispatch) => {
    const { data } = await api.updateUser(databoi, token);
    if (data?.error) {
      toast.error(data.error, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      dispatch({
        type: "UPDATE_USER",
        data,
      });
      toast.success("Profile updated :)", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };
