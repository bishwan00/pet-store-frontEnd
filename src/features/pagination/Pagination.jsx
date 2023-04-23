import React from "react";
import { useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const Pagination = () => {
  let [num, setNum] = useState(1);
  let [cur, setCur] = useState(1);
  const pages = [
    { page: num },
    { page: num + 1 },
    { page: num + 2 },
    { page: num + 3 },
    { page: num + 4 },
    { page: num + 5 },
  ];
  const next = () => {
    setNum(++num);
  };
  const back = () => {
    num > 1 && setNum(--num);
  };
  return (
    <div className="flex bg-white rounded-lg ">
      <button
        onClick={back}
        className="px-4 rounded-l-lg border-2 border-r-0 border-daisy-bush-600 w-12 hover:bg-daisy-bush-600 hover:text-white"
      >
        <SlArrowLeft />
      </button>

      {pages.map((pg, i) => {
        return (
          <button
            key={i}
            onClick={() => setCur(pg.page)}
            className={`h-12 border-2 border-r-0 border-daisy-bush-600 w-12 ${
              cur === pg.page && "bg-daisy-bush-600 text-white"
            }`}
          >
            {pg.page}
          </button>
        );
      })}
      <button
        onClick={next}
        className="px-4 rounded-r-lg border-2  border-daisy-bush-600 w-12 hover:bg-daisy-bush-600 hover:text-white"
      >
        <SlArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
