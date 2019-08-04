import { HANDLE_ERRORS } from "../actions/types";

const initialState = {
  errMsg: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case HANDLE_ERRORS:
      return {
        ...state,
        errMsg: action.payload
      };
    default:
      return state;
  }
}
