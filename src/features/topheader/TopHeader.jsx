import React from "react";

const TopHeader = ({ text }) => {
  return (
    <div className="w-full flex flex-col justify-center gap-2 items-center mt-20">
      <div className="text-center text-3xl">{text}</div>
      <div className="bg-daisy-bush-200 h-[2px] w-96"></div>
    </div>
  );
};

export default TopHeader;
