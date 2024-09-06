import { LOGIN_NOT, LOGIN_SUCCESS, LOGOUT } from "./actionTypes";

const initialState = {
  isLogin: false,
  token: "",
  error: false,
};

export const loginReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_SUCCESS:
      return { isLogin: true, token: payload, error: false };
    case LOGIN_NOT:
      return { isLogin: false, token: "", error: true };
    case LOGOUT:
      return {
        isLogin: false,
        token: "",
        error: false,
      };
    default:
      return state;
  }
};
