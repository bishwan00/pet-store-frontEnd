import React from "react";
import img from "../../asset/undraw_welcome_cats_thqn 1.svg";
import { MdOutlinePets } from "react-icons/md";
import { Link } from "react-router-dom";

const Signin = ({ handleInput }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="bg-daisy-bush-200 flex flex-col items-center justify-center  md:p-10 p-2  bg-opacity-40 shadow-lg backdrop-blur-md backdrop-filter border border-opacity-25 border-white rounded-md">
        <div>
          <img src={img} alt="image" className="w-60" />
        </div>
        <form className="flex flex-col w-80 items-center justify-center gap-4 mt-10">
          <input
            type="email"
            className="bg-transparent border-b-2 w-52 rounded-sm outline-none text-daisy-bush-900 placeholder:text-daisy-bush-900 pl-4"
            placeholder="E-MAIL"
          />{" "}
          <input
            className="bg-transparent border-b-2 w-52 rounded-sm outline-none text-daisy-bush-900 placeholder:text-daisy-bush-900 pl-4"
            placeholder="PASSWORD"
            type="password"
          />
          <button className="bg-daisy-bush-900  text-white w-52 py-[5px] px-[15px] rounded-md">
            {" "}
            <span className="flex gap-2 justify-center items-center">
              {" "}
              <MdOutlinePets />
              Login
            </span>
          </button>
        </form>
        <div className="mt-5">
          {" "}
          <span className="cursor-pointer" onClick={handleInput}>
            Don't have an account?
          </span>
        </div>
      </div>
    </div>
  );
};

export default Signin;
