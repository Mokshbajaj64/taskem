import * as api from "../api/api";
import { Dispatch } from "redux";
import { toast } from "react-toastify";

export const getTodayTasks = (token: string) => async (dispatch: Dispatch) => {
  const { data } = await api.getTodayTasks(token);
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
      type: "GET_TODAY_TASKS",
      data,
    });
  }
};

export const createTodayTask =
  (databoi: { title: string; description: string }, token: string) =>
  async (dispatch: Dispatch) => {
    const { data } = await api.createTodayTask(databoi, token);
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
        type: "ADD_TODAY_TASK",
        data,
      });
    }
  };

export const deleteTodayTask =
  (token: string, taskId: string) => async (dispatch: Dispatch) => {
    const { data } = await api.deleteTodayTask(token, taskId);
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
        type: "DELETE_TODAY_TASK",
        data,
      });
    }
  };

export const updateTodayTask =
  (
    databoi: { title: string; description: string },
    token: string,
    taskId: string
  ) =>
  async (dispatch: Dispatch) => {
    const { data } = await api.updateTodayTask(databoi, token, taskId);
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
        type: "UPDATE_TODAY_TASK",
        data,
      });
    }
  };

export const complteTodayTask =
  (token: string, taskId: string) => async (dispatch: Dispatch) => {
    const { data } = await api.complteTodayTask(token, taskId);
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
      toast.success("Task completed, cheers :)", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      dispatch({
        type: "COMPLETE_TODAY_TASK",
        data,
      });
    }
  };

export const searchTodayTasks =
  (token: string, search: string) => async (dispatch: Dispatch) => {
    const { data } = await api.searchTodayTasks(token, search);
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
        type: "SEARCH_TODAY_TASK",
        data,
      });
    }
  };

export const filerTodayTaskTime =
  (token: string) => async (dispatch: Dispatch) => {
    const { data } = await api.filerTodayTaskTime(token);
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
        type: "FILTER_TODAY_TIME",
        data,
      });
    }
  };

export const filerTodayTaskTitle =
  (token: string) => async (dispatch: Dispatch) => {
    const { data } = await api.filerTodayTaskTitle(token);
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
        type: "FILTER_TODAY_TITLE",
        data,
      });
    }
  };
