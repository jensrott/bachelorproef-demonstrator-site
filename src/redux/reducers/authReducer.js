import { LOGIN_USER, LOGOUT_USER, REGISTER_USER } from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: localStorage.getItem("token") ? true : false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case REGISTER_USER:
      // console.log("auth-reducer register");
      return {
        ...state,
        isAuthenticated: action.payload
      };
    case LOGIN_USER:
      // console.log("auth-reducer login");
      return {
        ...state,
        isAuthenticated: action.payload
      };
    case LOGOUT_USER:
      // console.log("logout");
      return {
        ...state,
        isAuthenticated: action.payload
      };

    default:
      return state;
  }
}
