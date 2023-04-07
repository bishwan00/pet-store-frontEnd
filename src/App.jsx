import { useState } from "react";
import Container from "./features/container/Container";
import Navbar from "./features/navbar/Navbar";
import Home from "./page/Home";
import Footer from "./features/footer/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Container>
        <Navbar />
      </Container>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Container>
        <Footer />
      </Container>
    </div>
  );
}

export default App;
