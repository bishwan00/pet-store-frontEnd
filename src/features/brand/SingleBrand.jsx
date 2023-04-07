import React from "react";

const SingleBrand = ({ img }) => {
  return (
    <div className="">
      <img src={img} alt="brand img" className="object-cover w-56" />
    </div>
  );
};

export default SingleBrand;
