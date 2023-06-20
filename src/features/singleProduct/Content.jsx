import React from "react";
import img from "../../asset/pngwing 7.svg";
import Button from "../button/Button";
import { useDispatch } from "react-redux";
import { increment } from "../../redux/counterSlice";
import { useParams } from "react-router-dom";

import { useState } from "react";
import "./qty.css";
import { useGetAllProductsQuery } from "../../api/product";
const Content = () => {
  const { id } = useParams();

  const { data } = useGetAllProductsQuery({
    id: id,
  });
  const dispatch = useDispatch();
  const [qnty, setQnty] = useState(1);

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

  const handleAddToCart = () => {
    // Get the existing cart data from localStorage
    const existingCartData = localStorage.getItem("cartData");

    // Parse the existing cart data into an array or set it as an empty array if it doesn't exist
    const cartData = existingCartData ? JSON.parse(existingCartData) : [];

    // Find the product in the cart data based on its ID
    const existingProduct = cartData.find((item) => item._id === id);

    if (existingProduct) {
      // If the product already exists in the cart, update its quantity
      existingProduct.quantity += qnty;
    } else {
      // If the product doesn't exist in the cart, add it with the specified quantity
      cartData.push({ ...data?.data[0], quantity: qnty });
    }

    // Save the updated cart data to localStorage
    localStorage.setItem("cartData", JSON.stringify(cartData));

    // Dispatch the increment action
    dispatch(increment(qnty));
    setQnty(1);
  };
  return (
    <div className="flex justify-center items-start flex-wrap gap-20 ">
      <div className="border-2 border-daisy-bush-200 rounded-md p-4 object-cover ">
        <img src={data?.data[0].image} alt="" />
        {console.log(data?.data[0].image)}
      </div>
      <div className="text-center flex flex-col items-center md:items-start md:text-left">
        <h1 className="font-bold text-xl mb-2">{data?.data[0].fullName}</h1>
        <div className="mb-6 text-2xl">{data?.data[0].details}</div>
        <div className="font-bold text-2xl mb-6 text-daisy-bush-900">
          {data?.data[0].price}$
        </div>

        <div className="text-sm text-center md:text-left text-pale-sky-400 md:w-96 w-80 mb-4">
          {data?.data[0].description}
        </div>
        <div className="bg-daisy-bush-200 h-[2px] w-96 mb-5"></div>
        <div className="mb-5 w-full text-center">
          {" "}
          <Button text="Add to Card" handleClick={handleAddToCart} />
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
