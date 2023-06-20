import React from "react";

const SingleBrand = ({ brand }) => {
  return (
    <div className="">
      <img src={brand.img} alt="brand img" className="object-cover w-56" />
      <div>{brand.name}</div>
    </div>
  );
};

export default SingleBrand;
