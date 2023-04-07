import React from "react";
import Container from "../features/container/Container";
import Header from "../features/header/Header";
import Stats from "../features/stats/Stats";
import TopHeader from "../features/topheader/TopHeader";
import ShowCategories from "../features/categories/ShowCategories";
import ShowBrands from "../features/brand/ShowBrands";
import ProductCards from "../features/product/ProductCards";
const Home = () => {
  return (
    <div>
      {" "}
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
        <div className="bg-daisy-bush-50 my-20 py-2">
          <TopHeader text="Our Brands" />

          <ShowBrands />
        </div>
      </Container>
      <Container>
        <TopHeader text="Popular Products" />
      </Container>
      <Container>
        <ProductCards />
      </Container>
    </div>
  );
};

export default Home;
