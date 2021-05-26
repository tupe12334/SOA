import { LOGIN } from "../types";
import axios from "axios";
export const loginAction =
  async (email: string, password: string) => async (dispatch, getState) => {
    console.log("enter");

    const data = (
      await axios.post(`${process.env.REACT_APP_SERVER_URL}/auth/login`, {
        email: email,
        password: password,
      })
    ).data;
    console.log(data);

    if (data.data) {
      dispatch(loginSuccessfully);
    }
  };
const loginSuccessfully = () => {
  return { payload: {}, type: LOGIN };
};
