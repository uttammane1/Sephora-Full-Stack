import axios from "axios";
import { CARTITEMS } from "./actionTypes";
import { IS_LOADING, NO_LOADING, ERROR } from "../Loading/actionTypes";

export const getCartItems = async (dispatch) => {
  const API_URL = `${import.meta.env.VITE_API_URL}/cart`;
  dispatch({ type: IS_LOADING });

  try {
    const { token } = JSON.parse(localStorage.getItem("user"));
    if (!token) {
      console.error("Token not found");
      dispatch({ type: ERROR });
      return;
    }

    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    dispatch({ type: CARTITEMS, payload: response.data.items });
    dispatch({ type: NO_LOADING });
  } catch (error) {
    console.log(error);
    dispatch({ type: ERROR });
  }
};
