import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { isLogin } = useSelector((state) => state.loginState);
  const data = JSON.parse(localStorage.getItem("user"));

  return isLogin || data?.isAuth ? children : <Navigate to="/" />;
};

export default PrivateRoutes;
