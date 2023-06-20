import React from "react";
import SingleCategories from "./SingleCategories";
import Img1 from "../../asset/pngwing 1.svg";
import Img2 from "../../asset/pngwing 2.svg";
import Img3 from "../../asset/pngwing 3.svg";
import Img4 from "../../asset/pngwing 4.svg";
import Img5 from "../../asset/pngwing 5.svg";
import { useGetAllCategoryQuery } from "../../api/category";
const ShowCategories = () => {
  const { data, isLoading } = useGetAllCategoryQuery({ limit: 5 });

  return (
    <div className="flex justify-evenly mt-20 flex-wrap">
      {isLoading ? (
        <> Loading...</>
      ) : (
        data.data?.map((category) => <SingleCategories category={category} />)
      )}
    </div>
  );
};

export default ShowCategories;
