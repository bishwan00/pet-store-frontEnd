import React from "react";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { RiMenuFoldLine, RiMenuUnfoldFill } from "react-icons/ri";
import { useState } from "react";
import Logo from "../../asset/logo.png";
import "./navbar.css";
const Navbar = () => {
  const [menu, setmenu] = useState(false);

  const onToggleMenu = (e) => {
    setmenu(!menu);
    const navLinks = document.querySelector(".navLinks");
    navLinks.classList.toggle("right-[0]");
  };
  return (
    <div className="bg-top-img h-20 flex items-end ">
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
        <div className="navLinks  md:static duration-500 absolute md:w-auto bg-white md:min-h-fit min-h-[50vh] top-14 right-[-100%] justify-center w-full flex  items-center ">
          {" "}
          <ul className="flex md:flex-row flex-col md:items-center md:w-auto w-12 md:gap-4 gap-8">
            <li className="text-lg active cursor-pointer">
              <a href="#">Home</a>
            </li>
            <li className="text-lg cursor-pointer">
              <a href="#">Brand</a>
            </li>{" "}
            <li className="text-lg cursor-pointer">
              <a href="#">Pharmacy</a>
            </li>{" "}
            <li className="text-lg cursor-pointer">
              <a href="#">Products</a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <input
            type="text"
            className="border-b placeholder-daisy-bush-900 pl-2 md:w-auto w-36 border-daisy-bush-500 outline-none"
            placeholder="Search...."
          />
          <MdOutlineShoppingCartCheckout className="text-daisy-bush-950 text-lg " />
          <CgProfile className="text-daisy-bush-950 text-lg " />
          {menu ? (
            <RiMenuUnfoldFill
              onClick={() => onToggleMenu(this)}
              className="text-3xl cursor-pointer md:hidden"
            />
          ) : (
            <RiMenuFoldLine
              onClick={() => onToggleMenu(this)}
              className="text-3xl cursor-pointer md:hidden"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
