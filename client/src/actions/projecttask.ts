import * as api from "../api/api";
import { Dispatch } from "redux";
import { toast } from "react-toastify";

export const getProjectTasks =
  (token: string, projectId: string) => async (dispatch: Dispatch) => {
    const { data } = await api.getProjectTasks(token, projectId);
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
        type: "GET_PROJECT_TASKS",
        data,
      });
    }
  };

export const createProjectTask =
  (
    token: string,
    projectId: string,
    databoi: { title: string; description: string }
  ) =>
  async (dispatch: Dispatch) => {
    const { data } = await api.createProjectTask(token, projectId, databoi);
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
        type: "CREATE_PROJECT_TASKS",
        data,
      });
    }
  };

export const deleteProjectTask =
  (token: string, projectId: string, taskId: string) =>
  async (dispatch: Dispatch) => {
    const { data } = await api.deleteProjectTask(token, projectId, taskId);
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
        type: "DELETE_PROJECT_TASKS",
        data,
      });
    }
  };

export const updateProjectTask =
  (
    token: string,
    projectId: string,
    databoi: { title: string; description: string },
    taskId: string
  ) =>
  async (dispatch: Dispatch) => {
    const { data } = await api.updateProjectTask(
      token,
      projectId,
      databoi,
      taskId
    );
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
        type: "UPDATE_PROJECT_TASKS",
        data,
      });
    }
  };

export const completeProjectTask =
  (token: string, projectId: string, taskId: string) =>
  async (dispatch: Dispatch) => {
    const { data } = await api.completeProjectTask(token, projectId, taskId);
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
        type: "COMPLETE_PROJECT_TASKS",
        data,
      });
    }
  };

export const projectTasksSearch =
  (token: string, projectId: string, search: string) =>
  async (dispatch: Dispatch) => {
    const { data } = await api.projectTasksSearch(token, projectId, search);
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
        type: "SEARCH_PROJECT_TASKS",
        data,
      });
    }
  };

export const projectTaskFilterTime =
  (token: string, projectId: string) => async (dispatch: Dispatch) => {
    const { data } = await api.projectTaskFilterTime(token, projectId);
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
        type: "FILTER_PROJECT_TASKS_TIME",
        data,
      });
    }
  };

export const projectTaskFilterTitle =
  (token: string, projectId: string) => async (dispatch: Dispatch) => {
    const { data } = await api.projectTaskFilterTitle(token, projectId);
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
        type: "FILTER_PROJECT_TASKS_TITLE",
        data,
      });
    }
  };
