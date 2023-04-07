import React from "react";
import Button from "../button/Button";
import { FaStar } from "react-icons/fa";
import { increment } from "../../redux/counterSlice";

import { useDispatch } from "react-redux";
const SingleCard = ({ img }) => {
  const stars = Array(5).fill(0);
  const rate = 4;
  const colors = {
    orange: "#FFBA5A",
    gray: "#a9a9a9",
  };
  const dispatch = useDispatch();

  return (
    <div className="flex flex-wrap justify-center">
      <div className="bg-daisy-bush-100 p-4 w-80 md:w-60">
        <img src={img} alt="product Image" className="" />
      </div>
      <div className="w-80 shadow-md">
        <div className="m-4">
          <h1 className=" text-2xl font-bold">Title Card</h1>
          <span className="flex list-none">
            {stars.map((_, index) => {
              return (
                <li className="">
                  <FaStar
                    key={index}
                    size={14}
                    style={{
                      marginRight: 1,
                      cursor: "pointer",
                    }}
                    color={rate > index ? colors.orange : colors.gray}
                  />
                </li>
              );
            })}
          </span>

          <div className="mt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
            libero animi quas vita
          </div>
        </div>
        <div className="flex justify-center items-center gap-5 ml-4 mb-4 mt-16">
          <Button
            text="Add to Card"
            handleClick={() => dispatch(increment())}
          />
          <span className="text-2xl text-daisy-bush-800">52$</span>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
