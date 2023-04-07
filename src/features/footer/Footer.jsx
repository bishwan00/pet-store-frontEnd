import React from "react";
import logo from "../../asset/logo.png";
import EnglandFlag from "../../asset/english.svg";
import { IoMdArrowDropdown } from "react-icons/io";

const Footer = () => {
  return (
    <div className="py-5 px-5 bg-white border-spacing-1 border-t border-daisy-bush-100">
      <div className="flex justify-around items-center flex-wrap md:gap-0 gap-y-4">
        <div>
          <img className="w-32" src={logo} alt="" />
        </div>
        <ul className="flex gap-4 ">
          <li className="text-base active cursor-pointer hover:text-daisy-bush-600">
            <a href="#">Home</a>
          </li>
          <li className="text-base cursor-pointer hover:text-daisy-bush-600">
            <a href="#">Brand</a>
          </li>{" "}
          <li className="text-base cursor-pointer hover:text-daisy-bush-600">
            <a href="#">Pharmacy</a>
          </li>{" "}
          <li className="text-base cursor-pointer hover:text-daisy-bush-600">
            <a href="#">Products</a>
          </li>
        </ul>
        <div className="flex justify-center items-center gap-2">
          <img className="w-8" src={EnglandFlag} alt="" />
          <span>English</span>
          <IoMdArrowDropdown />
        </div>
      </div>
      <div className="flex justify-center mt-5">
        {" "}
        <div className="bg-daisy-bush-500 rounded-lg h-[3px] w-[80%]"></div>
      </div>
      <div className="flex justify-center mt-5">
        <span className="text-center">
          © 2023 Copyrights by Potan Co. All Rights Reserved. Designed by
          Bishwan Sherko
        </span>
      </div>
    </div>
  );
};

export default Footer;
