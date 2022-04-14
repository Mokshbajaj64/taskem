import * as api from "../api/api";
import { Dispatch } from "redux";
import { toast } from "react-toastify";

export const getTag = (token: string,tagId: string) => async (dispatch: Dispatch) => {
  const { data } = await api.getTag(token,tagId);
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
      type: "GET_TAG",
      data,
    });
  }
};