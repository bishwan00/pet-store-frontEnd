import React from "react";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { RiMenuFoldLine, RiMenuUnfoldFill } from "react-icons/ri";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import Logo from "../../asset/logo.png";
import "./navbar.css";
const Navbar = () => {
  const [menu, setmenu] = useState(false);
  const count = useSelector((state) => state.counter.value);

  const onToggleMenu = (e) => {
    setmenu(!menu);
    const navLinks = document.querySelector(".navLinks");
    navLinks.classList.toggle("right-[0]");
  };
  return (
    <div className="bg-top-img h-20 flex items-end fixed w-full top-0">
      <div
        className={
          menu
            ? "flex items-center	 justify-between mx-auto  bg-white h-12 w-full rounded-tl-2xl rounded-tr-2xl drop-shadow-sm	px-4"
            : "flex items-center	 justify-between mx-auto overflow-hidden  bg-white h-12 w-full rounded-tl-2xl rounded-tr-2xl drop-shadow-sm	px-4"
        }
      >
        <div className="">
          <img className="w-28" src={Logo} alt="logo image" />
        </div>{" "}
        <div className="navLinks  md:static duration-500 absolute md:w-auto bg-white md:min-h-fit min-h-[50vh] top-10 right-[-100%] justify-center w-full flex  items-center ">
          {" "}
          <ul className="flex md:flex-row flex-col md:items-center md:w-auto w-12 md:gap-4 gap-8">
            <NavLink to="/">
              <li className="text-base  cursor-pointer">Home</li>
            </NavLink>
            <NavLink to="/brand">
              <li className="text-base cursor-pointer">Brand</li>
            </NavLink>{" "}
            <NavLink to="/pharmacy">
              {" "}
              <li className="text-base cursor-pointer">Pharmacy</li>
            </NavLink>{" "}
            <NavLink to="/products">
              {" "}
              <li className="text-base cursor-pointer">Products</li>
            </NavLink>
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <input
            type="text"
            className="border-b placeholder-daisy-bush-900 pl-2 md:w-auto w-32 border-daisy-bush-500 outline-none"
            placeholder="Search...."
          />
          <MdOutlineShoppingCartCheckout className="text-daisy-bush-950 text-lg " />
          {count !== 0 ? (
            <span className="md:right-10 top-1 right-20 bg-daisy-bush-900 text-white rounded-[50%] text-xs w-3 text-center absolute">
              {count}
            </span>
          ) : (
            ""
          )}
          <CgProfile className="text-daisy-bush-950 text-lg " />
          {menu ? (
            <RiMenuUnfoldFill
              onClick={() => onToggleMenu(this)}
              className="text-2xl cursor-pointer md:hidden"
            />
          ) : (
            <RiMenuFoldLine
              onClick={() => onToggleMenu(this)}
              className="text-2xl cursor-pointer md:hidden"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
