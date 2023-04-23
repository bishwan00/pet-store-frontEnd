import Button from "../button/Button";
import ButtonW from "../button/ButtonW";
import Container from "../container/Container";
import React from "react";
import img from "../../asset/pngwing 7.svg";
import { RiDeleteBin2Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <Container>
      <div className="my-20 pt-10">
        <div className="text-center mb-10">
          <h1 className="text-2xl font-bold mb-5">YOUR CART</h1>
          <span>Shopping Cart(2)</span>
        </div>
        <div className="flex justify-between mx-2">
          <ButtonW text="CONTINUE SHOPPING" /> <Button text="CHECKOUT NOW" />
        </div>

        <div className="flex justify-between flex-col-reverse md:flex-row md:flex-nowrap flex-wrap mt-10">
          <div className="flex flex-col md:w-[70%]">
            {" "}
            <div className="flex justify-between items-center  border-b h-36 border-pale-sky-200">
              <div className="flex gap-4 items-center">
                <div className="w-24">
                  <img className="object-cover" src={img} alt="img" />
                </div>
                <div>
                  <span className="font-bold text-xs">Product Name:</span>{" "}
                  nothings
                  <br />
                  <span className="font-bold text-xs">Price:</span> 50$
                  <br />
                  <span className="font-bold text-xs">Total Price:</span> 50$
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl flex gap-2">
                  <span>-</span>2<span>+</span>
                </div>
              </div>
              <div>
                <div className="border-2 border-red px-2 py-1 rounded-md mr-2 md:mr-4 text-red hover:text-white hover:bg-red duration-500 text-2xl">
                  {" "}
                  <RiDeleteBin2Line />
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center border-b h-36 border-pale-sky-200">
              <div className="flex gap-4 items-center">
                <div className="w-24">
                  <img className="object-cover" src={img} alt="img" />
                </div>
                <div>
                  <span className="font-bold text-xs">Product Name:</span>{" "}
                  nothings
                  <br />
                  <span className="font-bold text-xs">Price:</span> 50$
                  <br />
                  <span className="font-bold text-xs">Total Price:</span> 50$
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl flex gap-2">
                  <span>-</span>2<span>+</span>
                </div>
              </div>
              <div>
                <div className="border-2 border-red px-2 py-1 rounded-md mr-2 md:mr-4 text-red hover:text-white hover:bg-red duration-500 text-2xl">
                  {" "}
                  <RiDeleteBin2Line />
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center border-b h-36 border-pale-sky-200">
              <div className="flex gap-4 items-center">
                <div className="w-24">
                  <img className="object-cover" src={img} alt="img" />
                </div>
                <div>
                  <span className="font-bold text-xs">Product Name:</span>{" "}
                  nothings
                  <br />
                  <span className="font-bold text-xs">Price:</span> 50$
                  <br />
                  <span className="font-bold text-xs">Total Price:</span> 50$
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl flex gap-2">
                  <span>-</span>2<span>+</span>
                </div>
              </div>
              <div>
                <div className="border-2 border-red px-2 py-1 rounded-md mr-2 md:mr-4 text-red hover:text-white hover:bg-red duration-500 text-2xl">
                  {" "}
                  <RiDeleteBin2Line />
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-[30%] mx-2 h-80 border-pale-sky-200 rounded-2xl border p-4">
            <h1 className="text-center font-bold md:text-base lg:text-2xl text-2xl">
              ORDER SUMMARY
            </h1>
            <div className="flex flex-col gap-4 md:text-lg md:mt-4">
              <div className="flex justify-between">
                <div>Subtotal</div>
                <div>50$</div>
              </div>
              <div className="flex justify-between">
                <div>Dilevery Price:</div>
                <div>0$</div>
              </div>{" "}
              <div className="flex justify-between">
                <div>Shipping Discount</div>
                <div>0$</div>
              </div>{" "}
              <div className="flex justify-between">
                <div className="font-bold text-lg">Total</div>
                <div className="font-bold text-lg">50$</div>
              </div>
            </div>
            <div className="mt-10">
              <button className="bg-daisy-bush-900 w-full  text-white w-auto py-[10px] px-[15px] rounded-md">
                <span className=" text-center">
                  <Link className="border-b text-center">CHECKOUT NOW</Link>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Checkout;
