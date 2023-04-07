import React from "react";
import SingleCategories from "./SingleCategories";
import Img1 from "../../asset/pngwing 1.svg";
import Img2 from "../../asset/pngwing 2.svg";
import Img3 from "../../asset/pngwing 3.svg";
import Img4 from "../../asset/pngwing 4.svg";
import Img5 from "../../asset/pngwing 5.svg";
const ShowCategories = () => {
  return (
    <div className="flex justify-evenly mt-20 ">
      <SingleCategories text="Dog" img={Img1} />
      <SingleCategories text="Cat" img={Img2} />
      <SingleCategories text="Bird" img={Img3} />
      <SingleCategories text="Small Animal" img={Img4} />
      <SingleCategories text="Horse" img={Img5} />
    </div>
  );
};

export default ShowCategories;
