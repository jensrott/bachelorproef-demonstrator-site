import axios from "axios";

export const getLocalStorage = () => {
  return localStorage.getItem("token");
};

export const sendTokenWithHeader = token => {
  if (token) {
    axios.defaults.headers.common["x-auth-token"] = token;
  } else {
    delete axios.defaults.headers.common["x-auth-token"];
  }
};
