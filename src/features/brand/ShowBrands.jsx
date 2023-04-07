import React from "react";
import SingleBrand from "./SingleBrand";
import BrandImg from "../../asset/Rectangle 24.svg";
import Button from "../button/Button";

const ShowBrands = () => {
  return (
    <div className="my-20">
      <div className="flex justify-evenly gap-x-60 gap-y-20 flex-wrap ">
        <SingleBrand img={BrandImg} />
        <SingleBrand img={BrandImg} />
        <SingleBrand img={BrandImg} />
        <SingleBrand img={BrandImg} />
        <SingleBrand img={BrandImg} />
        <SingleBrand img={BrandImg} />
      </div>
      <div className="w-full flex justify-center mt-20">
        <Button text="Show More" />
      </div>
    </div>
  );
};

export default ShowBrands;
