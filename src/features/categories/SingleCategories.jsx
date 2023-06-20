import React from "react";

const SingleCategories = ({ category }) => {
  return (
    <div className="text-center">
      <a href="#">
        <img src={category.image} className="w-40 h-44 object-cover mb-6" />
        <span>{category.name}</span>
      </a>
    </div>
  );
};

export default SingleCategories;
