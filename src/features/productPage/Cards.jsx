import React from "react";
import { FaStar } from "react-icons/fa";
import Button from "../button/Button";
import Img from "../../asset/pngwing 7.svg";
import { increment } from "../../redux/counterSlice";

import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const Cards = () => {
  const stars = Array(5).fill(0);
  const rate = 4;
  const colors = {
    orange: "#FFBA5A",
    gray: "#a9a9a9",
  };
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col items-center justify-between w-60">
      <Link to="/products/id">
        <div className="p-4 bg-daisy-bush-100">
          <img src={Img} alt="" />
        </div>
      </Link>
      <div className="pl-4 m-2 w-full shadow-md">
        <Link to="/products/id">
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
        </Link>
        <div className="flex justify-start items-center gap-5  mb-4 mt-16">
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

export default Cards;
