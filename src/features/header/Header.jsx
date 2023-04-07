import React from "react";
import headerImg from "../../asset/headerImg.svg";
import Button from "../button/Button";
const Header = () => {
  return (
    <div className="flex md:flex-row flex-col-reverse h-auto items-center mx-auto w-[92%] justify-around">
      <div className="md:self-start self-center md:mt-32 text-center md:text-left">
        <h1 className="font-bold xl:text-5xl  md:mb-20 text-3xl mb-6 ">
          Love them enough
          <br /> give them the best.
        </h1>
        <h3 className="text-pale-sky-500">
          Welcome to our online pet store, where you'll find everything you need
          <br />
          to keep your furry friends happy and healthy!
        </h3>
        <div className="mt-12">
          <Button text="Get Started" />
        </div>
      </div>
      <div>
        <img className="w-[600px]" src={headerImg} />
      </div>
    </div>
  );
};

export default Header;
