import * as api from "../api/api";
import { Dispatch } from "redux";
import { toast } from "react-toastify";

export const login =
  (databoi: { email: string; password: string }) =>
  async (dispatch: Dispatch) => {
    const { data } = await api.login(databoi);
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
      window.location.href = "/app/today";
      dispatch({
        type: "LOGIN",
        data,
      });
    }
  };
