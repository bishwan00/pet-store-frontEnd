import React from "react";
import { MdOutlinePets } from "react-icons/md";

const Button = ({ text, handleClick, icon }) => {
  return (
    <div>
      <button
        onClick={handleClick}
        className="bg-daisy-bush-900 text-white w-auto py-[10px] px-[15px] rounded-md"
      >
        <span className="flex gap-2 items-center">
          {" "}
          {icon ? <MdOutlinePets /> : ""}
          {text}
        </span>
      </button>
    </div>
  );
};

export default Button;
