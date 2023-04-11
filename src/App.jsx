import { useState } from "react";
import Container from "./features/container/Container";
import Navbar from "./features/navbar/Navbar";
import Home from "./page/Home";
import Footer from "./features/footer/Footer";
import { Routes, Route } from "react-router-dom";
import Products from "./page/Products";
import SingleProduct from "./page/SingleProduct";
import ScrollToTop from "./features/scroll/ScrollToUp";

function App() {
  return (
    <div>
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

        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Container>
        <Footer />
      </Container>
    </div>
  );
}

export default App;
