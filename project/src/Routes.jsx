import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./component/home/Home";
import KidsWear from "./component/ProductPage/KidsWear";
import MensWear from "./component/ProductPage/MensWear";
import WomensWear from "./component/ProductPage/WomensWear";

import Signup from "./pages/Signup";
import AdminPageLogin from "./component/AdminDataBase/AdminPageLogin";
import AdminPanel from "./component/AdminDataBase/AdminPanel";
import SingleProduct from "./component/singlePage/SingleProduct";
import { Address } from "./component/cart/Address";
import Payment from "./pages/Payment";
import Otp from "./pages/Otp";
import PaymentSuccess from "./pages/PaymentSuccess";
import PrivateRoutes from "./component/PrivateRoutes/PrivateRoutes";
import PaymentPage from "./component/Rahul/PaymentPage/PaymentPage";
import CartPage from "./component/Rahul/Cart/CartPage";
import OrderSucess from "./component/Rahul/PaymentPage/OrderSucess";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/kids" element={<KidsWear />} />
      <Route path="/mens" element={<MensWear />} />
      <Route path="/womens" element={<WomensWear />} />
      <Route
        path="/cart"
        element={
          <PrivateRoutes>
            <CartPage />
          </PrivateRoutes>
        }
      />
      <Route path="/signup" element={<Signup />} />
      <Route path="/address" element={<Address />} />
      <Route path="/paymentPage" element={<PaymentPage />} />
      <Route path="/otp" element={<Otp />} />
      <Route path="/orderSuccess" element={<OrderSucess />} />

      {/* <Route path='/paymentpage' element={<Address />} />  */}
      <Route path="/kidsproduct/:id" element={<SingleProduct />} />
      <Route path="/product/:id" element={<SingleProduct />} />
      {/* <Route path='/login' element={<Login />} />  */}
      {/* <Route path='/adminLogin' element={<AdminPageLogin />} /> 
        <Route path='/adminLogin' element={<AdminPageLogin />} /> 
        <Route path='/adminPanel' element={<AdminPanel />} />  */}
      <Route path="*" element={<h2>Page not found...</h2>} />
    </Routes>
  );
};

export default AllRoutes;
