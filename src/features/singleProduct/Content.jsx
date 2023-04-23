import React from "react";
import img from "../../asset/pngwing 7.svg";
import Button from "../button/Button";
const Content = () => {
  return (
    <div className="flex justify-center items-start flex-wrap gap-20 ">
      <div className="border-2 border-daisy-bush-200 rounded-md p-4 object-cover ">
        <img src={img} alt="" />
      </div>
      <div className="text-center flex flex-col items-center md:items-start md:text-left">
        <h1 className="font-bold text-xl mb-2">Product Title</h1>
        <div className="mb-6 text-2xl">
          Full name Lorem, ipsum dolor sit amet
        </div>
        <div className="font-bold text-2xl mb-6 text-daisy-bush-900">50$</div>

        <div className="text-sm text-center md:text-left text-pale-sky-400 md:w-96 w-80 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam eum
          aspernatur explicabo quibusdam at sed repellat in nam eos voluptas
          nostrum ab accusamus, repudiandae quam officiis quo iste amet fuga?
        </div>
        <div className="bg-daisy-bush-200 h-[2px] w-96 mb-5"></div>
        <div className="mb-5 text-center">
          {" "}
          <Button text="Add to Card" />
          <div>
            Qty:
            <input type="number" />
          </div>
        </div>
        <div className="bg-daisy-bush-200 h-[2px] w-96"></div>
      </div>
    </div>
  );
};

export default Content;
