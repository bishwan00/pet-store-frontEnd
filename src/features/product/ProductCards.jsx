import React from "react";
import SingleCard from "./SingleCard";
import Button from "../button/Button";
import { NavLink } from "react-router-dom";
import { useGetAllProductsQuery } from "../../api/product";

const ProductCards = () => {
  const { data } = useGetAllProductsQuery({ limit: 6 });
  return (
    <div className="mt-20">
      <div className="flex flex-wrap justify-evenly gap-y-6">
        {data?.data.map((e) => {
          return <SingleCard product={e} />;
        })}
      </div>
      <div className="flex justify-center my-20">
        <NavLink to="/products">
          <Button text="Show More" icon="true" />
        </NavLink>
      </div>
    </div>
  );
};

export default ProductCards;
