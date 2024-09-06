import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import CartPage from "../pages/CartPage";
import PrivateRoutes from "./PrivateRoutes";
import Products from "../pages/Products";
import Product from "../pages/Product";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/cart"
        element={
          <PrivateRoutes>
            <CartPage />
          </PrivateRoutes>
        }
      />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<Product />} />
    </Routes>
  );
};

export default AllRoutes;
