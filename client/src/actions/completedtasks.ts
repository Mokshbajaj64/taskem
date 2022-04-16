import * as api from "../api/api";
import { Dispatch } from "redux";
import { toast } from "react-toastify";

export const getCompletedTasks =
  (token: string) => async (dispatch: Dispatch) => {
    const { data } = await api.getCompletedTasks(token);
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
        type: "GET_COMPLETED_TASKS",
        data,
      });
    }
  };
