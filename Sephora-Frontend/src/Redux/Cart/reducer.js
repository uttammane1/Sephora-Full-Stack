import { CARTITEMS } from "./actionTypes";

export const cartReducer = (state = [], { type, payload }) => {
  switch (type) {
    case CARTITEMS:
      return payload;
    default:
      return state;
  }
};
