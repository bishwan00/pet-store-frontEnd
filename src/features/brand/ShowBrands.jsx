import React from "react";
import SingleBrand from "./SingleBrand";
import Button from "../button/Button";
import { useGetAllBrandsQuery } from "../../api/brand";

const ShowBrands = () => {
  const { data, isLoading } = useGetAllBrandsQuery({ limit: 6 });

  return (
    <div className="my-20">
      <div className="flex justify-evenly gap-x-60 gap-y-20 flex-wrap">
        {isLoading ? (
          <> Loading...</>
        ) : (
          data.data?.map((brand) => <SingleBrand brand={brand} />)
        )}
      </div>
      <div className="w-full flex justify-center mt-20">
        <Button text="Show More" />
      </div>
    </div>
  );
};

export default ShowBrands;
