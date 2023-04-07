import React from "react";

import { FaStar } from "react-icons/fa";

const Filter = () => {
  const stars = Array(5).fill(0);
  const rate = 4;
  const colors = {
    orange: "#FFBA5A",
    gray: "#a9a9a9",
  };

  return (
    <div className=" ">
      <div className="m-4">
        <h1 className="font-bold text-xl mb-6">Categories</h1>

        <table className="text-daisy-bush-600">
          <tr>
            <td className="pr-20">Dey Food</td>
            <td>(32)</td>
          </tr>{" "}
          <tr>
            <td className="pr-20">Dey Food</td>
            <td>(32)</td>
          </tr>{" "}
          <tr>
            <td className="pr-20">Dey Food</td>
            <td>(32)</td>
          </tr>{" "}
          <tr>
            <td className="pr-20">Dey Food</td>
            <td>(32)</td>
          </tr>
        </table>
      </div>
      <div className="bg-daisy-bush-700 h-[2px] w-56"></div>
      <div className="m-4">
        <h1 className="font-bold text-xl mb-6">Brands</h1>

        <table>
          <tr>
            <td className="pr-24">ACANA</td>
            <td>(32)</td>
          </tr>{" "}
          <tr>
            <td className="pr-24">ACANA</td>
            <td>(32)</td>
          </tr>{" "}
          <tr>
            <td className="pr-24">ACANA</td>
            <td>(32)</td>
          </tr>{" "}
          <tr>
            <td className="pr-24">ACANA</td>
            <td>(32)</td>
          </tr>
        </table>
      </div>
      <div className="bg-daisy-bush-700 h-[2px] w-56"></div>
      <div className="m-4">
        <h1 className="font-bold text-xl mb-6">Customer Rating</h1>

        <table>
          <tr>
            <td className="pr-2">
              <input type="checkbox" />
            </td>
            <td className="pr-14">
              <span className="flex list-none">
                {stars.map((_, index) => {
                  return (
                    <li className="">
                      <FaStar
                        key={index}
                        size={14}
                        style={{
                          marginRight: 1,
                          cursor: "pointer",
                        }}
                        color={rate > index ? colors.orange : colors.gray}
                      />
                    </li>
                  );
                })}
              </span>
            </td>
            <td>(32)</td>
          </tr>{" "}
          <tr>
            <td className="pr-2">
              <input type="checkbox" />
            </td>
            <td className="pr-14">
              <span className="flex list-none">
                {stars.map((_, index) => {
                  return (
                    <li className="">
                      <FaStar
                        key={index}
                        size={14}
                        style={{
                          marginRight: 1,
                          cursor: "pointer",
                        }}
                        color={3 > index ? colors.orange : colors.gray}
                      />
                    </li>
                  );
                })}
              </span>
            </td>
            <td>(32)</td>
          </tr>{" "}
          <tr>
            <td className="pr-2">
              <input type="checkbox" />
            </td>
            <td className="pr-14">
              <span className="flex list-none">
                {stars.map((_, index) => {
                  return (
                    <li className="">
                      <FaStar
                        key={index}
                        size={14}
                        style={{
                          marginRight: 1,
                          cursor: "pointer",
                        }}
                        color={2 > index ? colors.orange : colors.gray}
                      />
                    </li>
                  );
                })}
              </span>
            </td>
            <td>(32)</td>
          </tr>{" "}
          <tr>
            <td className="pr-2">
              <input type="checkbox" />
            </td>
            <td className="pr-14">
              <span className="flex list-none">
                {stars.map((_, index) => {
                  return (
                    <li className="">
                      <FaStar
                        key={index}
                        size={14}
                        style={{
                          marginRight: 1,
                          cursor: "pointer",
                        }}
                        color={1 > index ? colors.orange : colors.gray}
                      />
                    </li>
                  );
                })}
              </span>
            </td>
            <td>(32)</td>
          </tr>{" "}
        </table>
      </div>
    </div>
  );
};

export default Filter;
