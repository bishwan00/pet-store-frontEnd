import { useState } from "react";
import Container from "./features/container/Container";
import Navbar from "./features/navbar/Navbar";
import Header from "./features/header/Header";

function App() {
  return (
    <div>
      <Container>
        <Navbar />
      </Container>
      <Container>
        <Header />
      </Container>
    </div>
  );
}

export default App;
