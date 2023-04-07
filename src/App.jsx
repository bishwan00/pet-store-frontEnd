import { useState } from "react";
import Container from "./features/container/Container";
import Navbar from "./features/navbar/Navbar";
import Header from "./features/header/Header";
import Stats from "./features/stats/Stats";
import TopHeader from "./features/topheader/TopHeader";
import ShowCategories from "./features/categories/ShowCategories";

function App() {
  return (
    <div>
      <Container>
        <Navbar />
      </Container>
      <Container>
        <Header />
      </Container>
      <Container>
        <Stats />
      </Container>
      <Container>
        <TopHeader text="Popular Categories" />
      </Container>
      <Container>
        <ShowCategories />
      </Container>
      <Container>
        <TopHeader text="Our Brands" />
      </Container>
    </div>
  );
}

export default App;
