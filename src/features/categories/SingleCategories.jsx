import React from "react";

const SingleCategories = ({ img, text }) => {
  return (
    <div className="text-center">
      <a href="#">
        <img src={img} className="w-40 h-44 object-cover mb-6" />
        <span>{text}</span>
      </a>
    </div>
  );
};

export default SingleCategories;
