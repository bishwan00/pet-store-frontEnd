import React from "react";
const Container = ({ color, children }) => {
  return (
    <div
      className="max-w-[1536px] px-0 py-0 mx-auto my-0"
      style={{ backgroundColor: color }}
    >
      {children}
    </div>
  );
};

export default Container;
