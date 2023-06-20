import React, { useState, useEffect } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const Pagination = ({ numberOfPage, onPageChange }) => {
  const [cur, setCur] = useState(1);

  useEffect(() => {
    onPageChange(cur);
  }, [cur, onPageChange]);

  const handlePageClick = (page) => {
    setCur(page);
  };

  const goToPreviousPage = () => {
    if (cur > 1) {
      setCur(cur - 1);
    }
  };

  const goToNextPage = () => {
    if (cur < numberOfPage) {
      setCur(cur + 1);
    }
  };

  return (
    <div className="flex bg-white rounded-lg">
      <button
        onClick={goToPreviousPage}
        className="px-4 rounded-l-lg border-2 border-r-0 border-daisy-bush-600 w-12 hover:bg-daisy-bush-600 hover:text-white"
      >
        <SlArrowLeft />
      </button>

      {Array.from({ length: numberOfPage }, (_, index) => (
        <button
          key={index}
          onClick={() => handlePageClick(index + 1)}
          className={`h-12 border-2 border-r-0 border-daisy-bush-600 w-12 ${
            cur === index + 1 ? "bg-daisy-bush-600 text-white" : ""
          }`}
        >
          {index + 1}
        </button>
      ))}

      <button
        onClick={goToNextPage}
        className="px-4 rounded-r-lg border-2 border-daisy-bush-600 w-12 hover:bg-daisy-bush-600 hover:text-white"
      >
        <SlArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
