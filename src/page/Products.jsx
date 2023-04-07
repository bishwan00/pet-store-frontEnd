import React from "react";
import HeaderImg from "../features/productPage/HeaderImg";
import Filter from "../features/productPage/Filter";
import Cards from "../features/productPage/Cards";
import Container from "../features/container/Container";

const Products = () => {
  return (
    <div>
      <Container>
        <HeaderImg />

        <div className="bg-daisy-bush-900 h-[6px] w-full"></div>
        <div className="flex mt-10 flex-wrap justify-center md:justify-normal">
          <Filter />
          <div className=" w-[70%] flex flex-wrap justify-center md:justify-end gap-y-6 md:gap-x-10">
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Products;
