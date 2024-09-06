import { ERROR, IS_LOADING, NO_LOADING } from "./actionTypes";

const initialState = {
  loading: false,
  error: false,
};

export const loadingReducer = (state = initialState, { type }) => {
  switch (type) {
    case IS_LOADING:
      return { loading: true, error: false };
    case NO_LOADING:
      return {
        loading: false,
        error: false,
      };
    case ERROR:
      return {
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};
