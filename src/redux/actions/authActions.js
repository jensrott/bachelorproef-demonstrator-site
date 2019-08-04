import { LOGIN_USER, LOGOUT_USER, REGISTER_USER, HANDLE_ERRORS } from "./types";
import axios from "axios";
import { sendTokenWithHeader } from "../../helpers";

export const registerUser = (userData, history) => dispatch => {
  axios
    .post("https://auth-rest-api.herokuapp.com/auth/register", userData, {
      "Content-Type": "application/x-www-form-urlencoded"
    })
    .then(res => {
      const { token } = res.data;
      localStorage.setItem("token", token);
      sendTokenWithHeader(token);
      let isAuthenticated = true;
      dispatch({
        type: REGISTER_USER,
        payload: isAuthenticated
      });
    })
    .catch(err => {
      const errMsg = err.response.data.message;
      dispatch({ type: HANDLE_ERRORS, payload: errMsg });
    });
};

export const loginUser = (userData, history) => dispatch => {
  // console.log("auth action run");
  axios
    .post("https://auth-rest-api.herokuapp.com/auth/login", userData, {
      "Content-Type": "application/x-www-form-urlencoded"
    })
    .then(res => {
      const { token } = res.data;
      localStorage.setItem("token", token);
      sendTokenWithHeader(token);
      let isAuthenticated = true;
      dispatch({
        type: LOGIN_USER,
        payload: isAuthenticated
      });
    })

    .catch(err => {
      const errMsg = err.response.data.message;
      dispatch({ type: HANDLE_ERRORS, payload: errMsg });
    });
};

export const logoutUser = () => dispatch => {
  localStorage.removeItem("token");
  sendTokenWithHeader(false);
  let isAuthenticated = false;
  dispatch({
    type: LOGOUT_USER,
    payload: isAuthenticated
  });
};
