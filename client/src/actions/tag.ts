import * as api from "../api/api";
import { Dispatch } from "redux";
import { toast } from "react-toastify";

export const getTags = (token: string) => async (dispatch: Dispatch) => {
  const { data } = await api.getTags(token);
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
      type: "GET_TAGS",
      data,
    });
  }
};

export const createTag =
  (
    databoi: { name: string; description: string; color: string },
    token: string
  ) =>
  async (dispatch: Dispatch) => {
    const { data } = await api.createTag(databoi, token);
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
        type: "CREATE_TAG",
        data,
      });
    }
  };

export const deleteTag =
  (token: string, tagId: string) => async (dispatch: Dispatch) => {
    const { data } = await api.deleteTag(token, tagId);
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
        type: "DELETE_TAG",
        data,
      });
    }
  };

export const updateTag =
  (
    databoi: { name: string; description: string; color: string },
    token: string,
    tagId: string
  ) =>
  async (dispatch: Dispatch) => {
    const { data } = await api.updateTag(databoi, token, tagId);
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
        type: "UPDATE_TAG",
        data,
      });
    }
  };

export const commentTag =
  (token: string, tagId: string, comment: string) =>
  async (dispatch: Dispatch) => {
    const { data } = await api.commentTag(token, tagId, comment);
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
        type: "COMMENT_TAG",
        data,
      });
    }
  };
