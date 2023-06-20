import React, { useState } from "react";
import HeaderImg from "../features/productPage/HeaderImg";
import Filter from "../features/productPage/Filter";
import Cards from "../features/productPage/Cards";
import Container from "../features/container/Container";
import { Link } from "react-router-dom";
import Pagination from "../features/pagination/Pagination";
import { useGetAllProductsQuery } from "../api/product";

const Products = () => {
  const [page, setPage] = useState(1);
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");

  const { data } = useGetAllProductsQuery({
    limit: 6,
    page: page,
    brand: brand,
    category: category,
  });
  const numberOfData = data?.NumberOfData;
  const numberOfPage = Math.ceil(parseInt(numberOfData, 10) / 6);

  const handleBrandChange = (newBrand) => {
    setBrand(newBrand);
  };

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div>
      <Container>
        <HeaderImg />

        <div className="bg-daisy-bush-900 h-[6px] w-full"></div>
        <div className="flex mt-10 flex-wrap justify-center md:justify-normal">
          <Filter
            brand={brand}
            category={category}
            onBrandChange={handleBrandChange}
            onCategoryChange={handleCategoryChange}
          />
          <div className="w-[70%] flex flex-wrap justify-center md:justify-end gap-y-6 md:gap-x-10">
            {data?.data.map((product) => {
              return <Cards product={product} />;
            })}
          </div>
        </div>
        <div className="flex justify-center my-20">
          <Pagination
            numberOfPage={numberOfPage}
            onPageChange={handlePageChange}
          />
        </div>
      </Container>
    </div>
  );
};

export default Products;
