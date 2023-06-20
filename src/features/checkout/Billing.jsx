import React, { useState } from "react";
import Container from "../container/Container";
import { Link } from "react-router-dom";
import { useOrderMutation } from "../../api/auth";
import { useSelector } from "react-redux";

const Billing = () => {
  const { user } = useSelector((state) => state.user);

  const [inputeData, setInputData] = useState({});
  const [order, { data, isError }] = useOrderMutation();
  const cartData = JSON.parse(localStorage.getItem("cartData")) || [];
  const handleInput = (e) => {
    setInputData({ ...inputeData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user && user._id) {
      order(inputeData, user._id);
    } else {
      // Handle the case when the user object or user._id is not available
    }
  };
  return (
    <Container>
      <div className="my-40 flex gap-4 justify-center md:flex-row flex-col-reverse">
        <div className="md:w-[50%] mx-2">
          <h1 className=" text-2xl mb-4 ml-4 text-daisy-bush-800">
            {" "}
            Billing address
          </h1>
          <form class="w-full ">
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  First Name
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  name="firstName"
                  onChange={handleInput}
                  placeholder="Jane"
                />
                {/* <p class="text-red text-xs italic">
                  Please fill out this field.
                </p> */}
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Last Name
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  name="lastName"
                  onChange={handleInput}
                  placeholder="Doe"
                />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for=""
                >
                  Phone number
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id=""
                  type="text"
                  name="phoneNumber"
                  onChange={handleInput}
                  placeholder="07xx xxx xxxx"
                />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for=""
                >
                  Adress
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id=""
                  type="text"
                  name="address"
                  onChange={handleInput}
                  placeholder="Main St"
                />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  City
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="city"
                  type="text"
                  name="city"
                  onChange={handleInput}
                  placeholder="suly"
                />
                {/* <p class="text-red text-xs italic">
                  Please fill out this field.
                </p> */}
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="building"
                >
                  Building
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="building"
                  type="text"
                  placeholder="Apartment or Suite"
                />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for=""
                >
                  Additional Comment (Optional)
                </label>
                {/* <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id=""
                  type="text"
                  placeholder="..."
                /> */}
                <textarea
                  name="comment"
                  onChange={handleInput}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id=""
                  cols="30"
                  rows="5"
                ></textarea>
              </div>
            </div>
          </form>
          <hr />
          <div className="w-full text-center my-10">
            <Link className="border-b text-center">
              <button
                className="bg-daisy-bush-900 w-full  text-white w-auto py-[10px] px-[15px] rounded-md"
                onClick={handleSubmit}
              >
                <span className=" text-center">Continue to checkout</span>
              </button>
            </Link>
          </div>
        </div>
        <div className="md:w-[30%] mx-2">
          <div className="flex justify-between">
            <span className="text-2xl mb-4 ml-4 text-daisy-bush-800">
              Your cart
            </span>{" "}
            <span className="text-2xl mb-4 mr-4 text-white font-bold rounded-[50%] w-6 text-center bg-daisy-bush-800">
              {cartData.length}
            </span>
          </div>
          <div className="flex flex-col border p-2 rounded-md border-pale-sky-200">
            {cartData.map((item) => (
              <div
                key={item._id}
                className="flex justify-between mx-2 border-b mt-4 border-pale-sky-200"
              >
                <div>
                  <div className="font-bold">{item.fullName}</div>
                  <div className="text-pale-sky-400">
                    Quantity: {item.quantity}
                  </div>
                </div>
                <div>{item.price}$</div>
              </div>
            ))}
            <div className="flex justify-between mx-2 mt-4">
              <div>
                <div className="text-lg">Total (USD)</div>
              </div>
              <div>
                {cartData.reduce(
                  (total, item) => total + item.price * item.quantity,
                  0
                )}
                $
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Billing;
