import React from "react";
import { FaStar } from "react-icons/fa";
import Button from "../button/Button";
import Img from "../../asset/pngwing 7.svg";
import { increment } from "../../redux/counterSlice";

import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const Cards = ({ product }) => {
  const stars = Array(5).fill(0);
  const rate = 4;
  const colors = {
    orange: "#FFBA5A",
    gray: "#a9a9a9",
  };
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    // Get the existing cart data from localStorage
    const existingCartData = localStorage.getItem("cartData");

    // Parse the existing cart data into an array or set it as an empty array if it doesn't exist
    const cartData = existingCartData ? JSON.parse(existingCartData) : [];

    // Find the product in the cart data based on its ID
    const existingProduct = cartData.find((item) => item._id === product._id);

    if (existingProduct) {
      // If the product already exists in the cart, update its quantity
      existingProduct.quantity += 1;
    } else {
      // If the product doesn't exist in the cart, add it with the specified quantity
      cartData.push({ ...product, quantity: 1 });
    }

    // Save the updated cart data to localStorage
    localStorage.setItem("cartData", JSON.stringify(cartData));

    // Dispatch the increment action
    dispatch(increment());
  };

  return (
    <div className="flex flex-col items-center justify-between w-60">
      <Link to={`product/${product._id}`}>
        <div className="p-4 bg-daisy-bush-100">
          <img src={product.image} alt="" />
        </div>
      </Link>
      <div className="pl-4 m-2 w-full shadow-md">
        <Link to={`product/${product._id}`}>
          <h1 className=" text-2xl font-bold">{product.fullName}</h1>
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

          <div className="mt-6">{product.description}</div>
        </Link>
        <div className="flex justify-start items-center gap-5  mb-4 mt-16">
          <Button text="Add to Card" handleClick={handleAddToCart} />
          <span className="text-2xl text-daisy-bush-800">{product.price}$</span>
        </div>
      </div>
    </div>
  );
};

export default Cards;
