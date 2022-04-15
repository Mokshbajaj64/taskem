import * as api from "../api/api";
import { Dispatch } from "redux";
import { toast } from "react-toastify";

export const getInboxTasks = (token: string) => async (dispatch: Dispatch) => {
  const { data } = await api.getInboxTasks(token);
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
      type: "GET_INBOX_TASKS",
      data,
    });
  }
};

export const createInboxTask =
  (databoi: { title: string; description: string }, token: string) =>
  async (dispatch: Dispatch) => {
    const { data } = await api.createInboxTask(databoi, token);
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
        type: "ADD_INBOX_TASK",
        data,
      });
    }
  };

export const deleteInboxTask =
  (token: string, taskId: string) => async (dispatch: Dispatch) => {
    const { data } = await api.deleteInboxTask(token, taskId);
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
        type: "DELETE_INBOX_TASK",
        data,
      });
    }
  };

export const updateInboxTask =
  (
    databoi: { title: string; description: string },
    token: string,
    taskId: string
  ) =>
  async (dispatch: Dispatch) => {
    const { data } = await api.updateInboxTask(databoi, token, taskId);
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
        type: "UPDATE_INBOX_TASK",
        data,
      });
    }
  };

export const completeInboxTask = 
  (token: string, taskId: string) => async (dispatch: Dispatch) => {
    const { data } = await api.completeInboxTask(token, taskId);
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
        type: "COMPLETE_INBOX_TASK",
        data,
      });
    }
  };

export const searchInboxTasks = 
  (token: string, search: string) => async (dispatch: Dispatch) => {
    const { data } = await api.searchInboxTasks(token, search);
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
        type: "SEARCH_INBOX_TASK",
        data,
      });
    }
  };
