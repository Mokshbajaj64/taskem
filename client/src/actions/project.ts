import * as api from "../api/api";
import { Dispatch } from "redux";
import { toast } from "react-toastify";

export const getProjects = (token: string) => async (dispatch: Dispatch) => {
  const { data } = await api.getProjects(token);
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
      type: "GET_PROJECTS",
      data,
    });
  }
};

export const createProject =
  (
    databoi: { name: string; description: string; color: string },
    token: string
  ) =>
  async (dispatch: Dispatch) => {
    const { data } = await api.createProject(databoi, token);
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
        type: "CREATE_PROJECT",
        data,
      });
    }
  };

export const deleteProject =
  (token: string, projectId: string) => async (dispatch: Dispatch) => {
    const { data } = await api.deleteProject(token, projectId);
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
        type: "DELETE_PROJECT",
        data,
      });
    }
  };

export const updateProject =
  (
    databoi: { name: string; description: string; color: string },
    token: string,
    projectId: string
  ) =>
  async (dispatch: Dispatch) => {
    const { data } = await api.updateProject(databoi, token, projectId);
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
        type: "UPDATE_PROJECT",
        data,
      });
    }
  };
