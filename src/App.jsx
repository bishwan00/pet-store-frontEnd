import { useEffect, useState } from "react";
import Container from "./features/container/Container";
import Navbar from "./features/navbar/Navbar";
import Home from "./page/Home";
import Footer from "./features/footer/Footer";
import { Routes, Route } from "react-router-dom";
import Products from "./page/Products";
import SingleProduct from "./page/SingleProduct";
import ScrollToTop from "./features/scroll/ScrollToUp";
import Login from "./page/Login";
import { useDispatch, useSelector } from "react-redux";

import Signup from "./features/login/Signup";
import Checkout from "./features/checkout/Checkout.jsx";
import Billing from "./features/checkout/Billing";
import Protected from "./features/protected/Protected";
import NotAuthorized from "./features/protected/NotAuthorized";
import { useGetCurrentUserQuery } from "./api/auth";
import { getUser } from "./api/globalSlices/user.slics";

function App() {
  const { user } = useSelector((state) => state.user);
  const { data, isError, isSuccess, isLoading } = useGetCurrentUserQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isSuccess && data) {
      dispatch(getUser(data.data));
    }
  }, [data]);
  return (
    <div className="min-h-[100%]">
      <ScrollToTop />
      <Container>
        <Navbar />
      </Container>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/products">
          <Route index element={<Products />} />
          <Route path=":id" element={<SingleProduct />} />
        </Route>
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<Protected user={user} />}>
          <Route path="/checkout">
            <Route index element={<Checkout />} />
            <Route path="billing" element={<Billing />} />
          </Route>
        </Route>
        <Route path="/403" element={<NotAuthorized />} />

        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Container>
        <Footer />
      </Container>
    </div>
  );
}

export default App;
