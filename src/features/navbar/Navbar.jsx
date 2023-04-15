import React from "react";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { RiMenuFoldLine, RiMenuUnfoldFill } from "react-icons/ri";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import Logo from "../../asset/logo.png";
import "./navbar.css";
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [profile, setProfile] = useState(false);
  const count = useSelector((state) => state.counter.value);

  const onToggleMenu = (e) => {
    setMenu(!menu);
    setProfile(false);
    const navLinks = document.querySelector(".navLinks");
    navLinks.classList.toggle("right-[0]");
  };
  const onToggleProfile = (e) => {
    setProfile(!profile);
  };
  return (
    <div className="bg-top-img z-10  h-20 flex items-end fixed w-full top-0">
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
            <NavLink onClick={() => onToggleMenu(this)} to="/">
              <li className="text-base  cursor-pointer">Home</li>
            </NavLink>
            <NavLink onClick={() => onToggleMenu(this)} to="/brand">
              <li className="text-base cursor-pointer">Brand</li>
            </NavLink>{" "}
            <NavLink onClick={() => onToggleMenu(this)} to="/pharmacy">
              {" "}
              <li className="text-base cursor-pointer">Pharmacy</li>
            </NavLink>{" "}
            <NavLink onClick={() => onToggleMenu(this)} to="/products">
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
            <span className="md:right-10 top-1 z-50 right-20 bg-daisy-bush-900 text-white w-5 rounded-[100%] text-xs w-3 text-center absolute">
              {count}
            </span>
          ) : (
            ""
          )}
          <CgProfile
            onClick={() => onToggleProfile(this)}
            className="text-daisy-bush-950 text-lg cursor-pointer"
          />

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
      {profile ? (
        <div className="absolute right-5 top-20 z-50 bg-daisy-bush-50 w-48 rounded-b-lg text-center">
          <ul className="border-b-2 border-daisy-bush-800 mt-4">
            <Link to="">
              <li>Profile</li>
            </Link>
          </ul>
          <Link
            to="/signin"
            onClick={() => {
              setProfile(false);
            }}
          >
            <button className="bg-daisy-bush-900 text-white w-auto py-[5px] px-[25px] rounded-md my-4 ">
              <span className="flex gap-2 items-center">Login</span>
            </button>
          </Link>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Navbar;
