import { combineReducers } from "redux";
import { loginReducer } from "./Login/reducer";
import { cartReducer } from "./Cart/reducer";
import { loadingReducer } from "./Loading/reducer";

const rootReducer = combineReducers({
  loginState: loginReducer,
  cartData: cartReducer,
  loading: loadingReducer,
});

export default rootReducer;
