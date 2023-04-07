import React from "react";
import img from "../../asset/homeCatImg.svg";
const Stats = () => {
  return (
    <div className="flex lg:justify-start justify-center lg:ml-28 items-center  flex-wrap mt-20">
      <div>
        <img src={img} alt="img" className="w-80" />
      </div>
      <div className="flex-col self-start">
        <div className="md:mx-24 mx-10">
          <h1 className="md:text-3xl text-2xl my-10 font-bold md:my-24 text-center">
            Trusted by over 1 clients worldwide since 2023
          </h1>
        </div>
        <div className="flex gap-40 md:gap-96 justify-center bg-daisy-bush-100 ml-0 h-28 items-center md:rounded-tr-2xl md:rounded-br-2xl">
          {" "}
          <span className="text-center">
            0<br />
            Sales
          </span>{" "}
          <span className="text-center">
            0%
            <br />
            Happy Clients
          </span>
        </div>
      </div>
    </div>
  );
};

export default Stats;
