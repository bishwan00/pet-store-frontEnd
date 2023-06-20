import Button from "../button/Button";
import ButtonW from "../button/ButtonW";
import Container from "../container/Container";
import React, { useEffect, useState } from "react";
import { RiDeleteBin2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { decrement, increment } from "../../redux/counterSlice";
const Checkout = () => {
  const count = useSelector((state) => state.counter.value);
  const [total, setTotal] = useState(0);
  const [cartData, setCartData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    // Get the cart data from local storage
    const existingCartData = localStorage.getItem("cartData");

    // Set the cart data in the component state
    setCartData(existingCartData ? JSON.parse(existingCartData) : []);
  }, []);
  useEffect(() => {
    // Calculate the total price of all items in the cart
    const cartTotal = cartData.reduce((accumulator, item) => {
      return accumulator + item.price * item.quantity;
    }, 0);

    // Update the total state variable
    setTotal(cartTotal);
  }, [cartData]);

  const handleQuantityChange = (id, action) => {
    const updatedCartData = cartData.map((item) => {
      if (item._id === id) {
        if (action === "decrease") {
          // Decrease the quantity by 1 if greater than 1
          dispatch(decrement(1));

          return {
            ...item,
            quantity: item.quantity > 1 ? item.quantity - 1 : 1,
          };
        } else if (action === "increase") {
          // Increase the quantity by 1
          dispatch(increment(1));

          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
      }
      return item;
    });

    // Update the cart data in the component state
    setCartData(updatedCartData);

    // Save the updated cart data to local storage
    localStorage.setItem("cartData", JSON.stringify(updatedCartData));
  };

  const handleDeleteItem = (id) => {
    // Remove the item from the cart data based on its ID
    const updatedCartData = cartData.filter((item) => item._id !== id);

    // Update the cart data in the component state
    setCartData(updatedCartData);

    // Save the updated cart data to local storage
    localStorage.setItem("cartData", JSON.stringify(updatedCartData));
  };

  return (
    <Container>
      <div className="my-20 pt-10">
        <div className="text-center mb-10">
          <h1 className="text-2xl font-bold mb-5">YOUR CART</h1>
          <span>Shopping Cart({count})</span>
        </div>
        <div className="flex justify-between mx-2">
          <Link>
            <ButtonW text="CONTINUE SHOPPING" />{" "}
          </Link>
          <Link to="/checkout/billing">
            {" "}
            <Button text="CHECKOUT NOW" />
          </Link>
        </div>

        <div className="flex justify-between flex-col-reverse md:flex-row md:flex-nowrap flex-wrap mt-10">
          <div className="flex flex-col md:w-[70%]">
            {cartData.map((item) => {
              return (
                <div
                  key={item._id}
                  className="flex justify-between items-center  border-b h-36 border-pale-sky-200"
                >
                  <div className="flex gap-4 items-center">
                    <div className="w-24">
                      <img
                        className="object-cover"
                        src={item.image}
                        alt="img"
                      />
                    </div>
                    <div>
                      <span className="font-bold text-xs">Product Name:</span>{" "}
                      {item.fullName}
                      <br />
                      <span className="font-bold text-xs">Price:</span>{" "}
                      {item.price}$
                      <br />
                      <span className="font-bold text-xs">
                        Total Price:
                      </span>{" "}
                      {item.price * item.quantity}$
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl flex gap-2">
                      <span
                        className="cursor-pointer"
                        onClick={() =>
                          handleQuantityChange(item._id, "decrease")
                        }
                      >
                        -
                      </span>
                      {item.quantity}
                      <span
                        className="cursor-pointer"
                        onClick={() =>
                          handleQuantityChange(item._id, "increase")
                        }
                      >
                        +
                      </span>
                    </div>
                  </div>
                  <div>
                    <div
                      className="border-2 border-red px-2 py-1 rounded-md mr-2 md:mr-4 text-red hover:text-white hover:bg-red duration-500 text-2xl"
                      onClick={() => handleDeleteItem(item._id)}
                    >
                      <RiDeleteBin2Line />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="md:w-[30%] mx-2 h-80 border-pale-sky-200 rounded-2xl border p-4">
            <h1 className="text-center font-bold md:text-base lg:text-2xl text-2xl">
              ORDER SUMMARY
            </h1>
            <div className="flex flex-col gap-4 md:text-lg md:mt-4">
              <div className="flex justify-between">
                <div>Subtotal</div>
                <div>{total}$</div>
              </div>
              <div className="flex justify-between">
                <div>Delivery Price:</div>
                <div>0$</div>
              </div>
              <div className="flex justify-between">
                <div>Shipping Discount</div>
                <div>0$</div>
              </div>
              <div className="flex justify-between">
                <div className="font-bold text-lg">Total</div>
                <div className="font-bold text-lg">{total}$</div>
              </div>
            </div>
            <div className="mt-10">
              <Link to="/checkout/billing" className="border-b text-center">
                <button className="bg-daisy-bush-900 w-full  text-white w-auto py-[10px] px-[15px] rounded-md">
                  <span className="border-b text-center">CHECKOUT NOW</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Checkout;
