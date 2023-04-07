import React from "react";
import SingleCard from "./SingleCard";
import ProductImg from "../../asset/pngwing 7.svg";
import Button from "../button/Button";

const ProductCards = () => {
  return (
    <div className="mt-20">
      <div className="flex flex-wrap justify-evenly gap-y-6">
        <SingleCard img={ProductImg} />
        <SingleCard img={ProductImg} />
        <SingleCard img={ProductImg} />
        <SingleCard img={ProductImg} />
      </div>
      <div className="flex justify-center my-20">
        <Button text="Show More" />
      </div>
    </div>
  );
};

export default ProductCards;
