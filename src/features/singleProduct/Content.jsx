import React from "react";
import img from "../../asset/pngwing 7.svg";
import Button from "../button/Button";
import { useDispatch } from "react-redux";
import { increment } from "../../redux/counterSlice";

import { useState } from "react";
import "./qty.css";
const Content = () => {
  const dispatch = useDispatch();
  const [qnty, setQnty] = useState(1);
  console.log(qnty);
  const incrementqnty = () => {
    if (qnty < 10) {
      setQnty(qnty + 1);
    }
  };
  const decrementqnty = () => {
    if (qnty > 0) {
      setQnty(qnty - 1);
    }
  };
  return (
    <div className="flex justify-center items-start flex-wrap gap-20 ">
      <div className="border-2 border-daisy-bush-200 rounded-md p-4 object-cover ">
        <img src={img} alt="" />
      </div>
      <div className="text-center flex flex-col items-center md:items-start md:text-left">
        <h1 className="font-bold text-xl mb-2">Product Title</h1>
        <div className="mb-6 text-2xl">
          Full name Lorem, ipsum dolor sit amet
        </div>
        <div className="font-bold text-2xl mb-6 text-daisy-bush-900">50$</div>

        <div className="text-sm text-center md:text-left text-pale-sky-400 md:w-96 w-80 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam eum
          aspernatur explicabo quibusdam at sed repellat in nam eos voluptas
          nostrum ab accusamus, repudiandae quam officiis quo iste amet fuga?
        </div>
        <div className="bg-daisy-bush-200 h-[2px] w-96 mb-5"></div>
        <div className="mb-5 w-full text-center">
          {" "}
          <Button
            text="Add to Card"
            handleClick={() => {
              dispatch(increment(qnty));
              setQnty(1);
            }}
          />
          <div className="flex justify-center md:justify-start  gap-6 items-center mt-4 appearance-none">
            <span className="text-xl font-bold"> Qty:</span>
            <div class="flex flex-row h-10 w-auto rounded-lg relative bg-transparent mt-1">
              <button
                data-action="decrement"
                onClick={decrementqnty}
                class=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-10 rounded-l cursor-pointer outline-none"
              >
                <span class="m-auto text-2xl font-thin">−</span>
              </button>
              <input
                type="number"
                class="outline-none focus:outline-none text-center w-6 bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
                name="custom-input-number"
                value={qnty}
              />
              <button
                data-action="increment"
                onClick={incrementqnty}
                class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-10 rounded-r cursor-pointer"
              >
                <span class="m-auto text-2xl font-thin">+</span>
              </button>
            </div>
          </div>
        </div>
        <div className="bg-daisy-bush-200 h-[2px] w-96"></div>
      </div>
    </div>
  );
};
export default Content;
