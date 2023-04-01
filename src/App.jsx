import { useState } from "react";
import Container from "./features/container/Container";
import Navbar from "./features/navbar/Navbar";

function App() {
  return (
    <div>
      <Container>
        <Navbar />
      </Container>
    </div>
  );
}

export default App;
