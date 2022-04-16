import * as api from "../api/api";
import { Dispatch } from "redux";
import { toast } from "react-toastify";

export const getWeeklyTasks = (token: string) => async (dispatch: Dispatch) => {
  const { data } = await api.getWeeklyTasks(token);
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
      type: "GET_WEEKLY_TASKS",
      data,
    });
  }
};

export const createWeeklyTask =
  (databoi: { title: string; description: string }, token: string) =>
  async (dispatch: Dispatch) => {
    const { data } = await api.createWeeklyTask(databoi, token);
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
        type: "ADD_WEEKLY_TASK",
        data,
      });
    }
  };

export const deleteWeeklyTask =
  (token: string, taskId: string) => async (dispatch: Dispatch) => {
    const { data } = await api.deleteWeeklyTask(token, taskId);
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
        type: "DELETE_WEEKLY_TASK",
        data,
      });
    }
  };

export const updateWeeklyTask =
  (
    databoi: { title: string; description: string },
    token: string,
    taskId: string
  ) =>
  async (dispatch: Dispatch) => {
    const { data } = await api.updateWeeklyTask(databoi, token, taskId);
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
        type: "UPDATE_WEEKLY_TASK",
        data,
      });
    }
  };

export const completeWeeklyTask = 
  (token: string, taskId: string) => async (dispatch: Dispatch) => {
    const { data } = await api.completeWeeklyTask(token, taskId);
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
        type: "COMPLETE_WEEKLY_TASK",
        data,
      });
    }
  };

export const searchWeeklyTasks = 
  (token: string, search: string) => async (dispatch: Dispatch) => {
    const { data } = await api.searchWeeklyTasks(token, search);
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
        type: "SEARCH_WEEKLY_TASK",
        data,
      });
    }
  };

export const filerWeeklyTaskTime = 
  (token: string) => async (dispatch: Dispatch) => {
    const { data } = await api.filerWeeklyTaskTime(token);
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
        type: "FILTER_WEEKLY_TIME",
        data,
      });
    }
  };

export const filerWeeklyTaskTitle = 
  (token: string) => async (dispatch: Dispatch) => {
    const { data } = await api.filerWeeklyTaskTitle(token);
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
        type: "FILTER_WEEKLY_TITLE",
        data,
      });
    }
  };
