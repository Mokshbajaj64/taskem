import * as api from "../api/api";
import { Dispatch } from "redux";

export const login =
  (databoi: { email: string; password: string }) =>
  async (dispatch: Dispatch) => {
    const { data } = await api.login(databoi);
    if (data?.error) {
      console.log(data?.error);
    } else {
      dispatch({
        type: "LOGIN",
        data,
      });
    }
  };
