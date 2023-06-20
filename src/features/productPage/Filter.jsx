import React from "react";
import { FaStar } from "react-icons/fa";
import { useGetAllBrandsQuery } from "../../api/brand";
import { useGetAllCategoryQuery } from "../../api/category";

const Filter = ({ brand, category, onBrandChange, onCategoryChange }) => {
  const { data: brandData, isLoading: brandLoading } = useGetAllBrandsQuery({});
  const { data: categoryData } = useGetAllCategoryQuery({});

  const stars = Array(5).fill(0);
  const rate = 4;
  const colors = {
    orange: "#FFBA5A",
    gray: "#a9a9a9",
  };

  const handleBrandClick = (selectedBrand) => {
    if (selectedBrand === brand) {
      // If the selected brand is already active, clear the filter
      onBrandChange("");
    } else {
      onBrandChange(selectedBrand);
    }
  };

  const handleCategoryClick = (selectedCategory) => {
    if (selectedCategory === category) {
      // If the selected category is already active, clear the filter
      onCategoryChange("");
    } else {
      onCategoryChange(selectedCategory);
    }
  };

  return (
    <div className=" ">
      <div className="m-4">
        <h1 className="font-bold text-xl mb-6">Categories</h1>
        <table className="text-daisy-bush-600">
          {categoryData?.data.map((c) => {
            return (
              <tr key={c._id}>
                <td
                  className={`pr-20 cursor-pointer ${
                    c.name === category ? "font-bold" : ""
                  }`}
                  onClick={() => handleCategoryClick(c.name)}
                >
                  {c.name}
                </td>
                <td>({c.product.length})</td>
              </tr>
            );
          })}
        </table>
      </div>
      <div className="bg-daisy-bush-700 h-[2px] w-56"></div>
      <div className="m-4">
        <h1 className="font-bold text-xl mb-6">Brands</h1>
        <table>
          {brandData?.data.map((b) => {
            return (
              <tr key={b._id}>
                <td
                  className={`pr-24 cursor-pointer ${
                    b.name === brand ? "font-bold" : ""
                  }`}
                  onClick={() => handleBrandClick(b.name)}
                >
                  {b.name}
                </td>
                <td>({b.product.length})</td>
              </tr>
            );
          })}
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
