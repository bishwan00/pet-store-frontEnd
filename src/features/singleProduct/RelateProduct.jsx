import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./slider.css";
import Productimg from "../../asset/pngwing 7.svg";
import Button from "../button/Button";

const RelateProduct = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className="mt-20 w-[92%] mx-auto">
      <div className="text-center font-bold text-4xl mb-10">
        Related Products
      </div>
      <Carousel infinite={true} responsive={responsive}>
        <div className="card w-60">
          <img src={Productimg} className="card-img mx-auto" />
          <div className="content">
            <h2 className="text-lg text-daisy-bush-600">Product Title</h2>
            <p className="mt-2 ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
              animi officiis accusamus suscipit optio molestias harum ratione{" "}
            </p>

            <p className="font-bold text-center my-4">99$</p>
          </div>
          <Button text="Add to Card" />
        </div>
        <div className="card w-60">
          <img src={Productimg} className="card-img mx-auto" />
          <div className="content">
            <h2 className="text-lg text-daisy-bush-600">Product Title</h2>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
              animi officiis accusamus suscipit optio molestias harum ratione{" "}
            </p>

            <p className="font-bold text-center my-4">99$</p>
          </div>
          <Button text="Add to Card" />
        </div>
        <div className="card w-60">
          <img src={Productimg} className="card-img mx-auto" />
          <div className="content">
            <h2 className="text-lg text-daisy-bush-600">Product Title</h2>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
              animi officiis accusamus suscipit optio molestias harum ratione{" "}
            </p>

            <p className="font-bold text-center my-4">99$</p>
          </div>{" "}
          <Button text="Add to Card" />
        </div>
        <div className="card w-60">
          <img src={Productimg} className="card-img mx-auto" />
          <div className="content">
            <h2 className="text-lg text-daisy-bush-600">Product Title</h2>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
              animi officiis accusamus suscipit optio molestias harum ratione{" "}
            </p>

            <p className="font-bold text-center my-4">99$</p>
          </div>{" "}
          <Button text="Add to Card" />
        </div>
        <div className="card w-60">
          <img src={Productimg} className="card-img mx-auto" />
          <div className="content">
            <h2 className="text-lg text-daisy-bush-600">Product Title</h2>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
              animi officiis accusamus suscipit optio molestias harum ratione{" "}
            </p>

            <p className="font-bold text-center my-4">99$</p>
          </div>
          <Button text="Add to Card" />
        </div>
        <div className="card w-60">
          <img src={Productimg} className="card-img mx-auto" />
          <div className="content">
            <h2 className="text-lg text-daisy-bush-600">Product Title</h2>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
              animi officiis accusamus suscipit optio molestias harum ratione{" "}
            </p>

            <p className="font-bold text-center my-4">99$</p>
          </div>{" "}
          <Button text="Add to Card" />
        </div>
        <div className="card w-60">
          <img src={Productimg} className="card-img mx-auto" />
          <div className="content">
            <h2 className="text-lg text-daisy-bush-600">Product Title</h2>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
              animi officiis accusamus suscipit optio molestias harum ratione{" "}
            </p>

            <p className="font-bold text-center my-4">99$</p>
          </div>{" "}
          <Button text="Add to Card" />
        </div>
        <div className="card w-60">
          <img src={Productimg} className="card-img mx-auto" />
          <div className="content">
            <h2 className="text-lg text-daisy-bush-600">Product Title</h2>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
              animi officiis accusamus suscipit optio molestias harum ratione{" "}
            </p>

            <p className="font-bold text-center my-4">99$</p>
          </div>{" "}
          <Button text="Add to Card" />
        </div>
        <div className="card w-60">
          <img src={Productimg} className="card-img mx-auto" />
          <div className="content">
            <h2 className="text-lg text-daisy-bush-600">Product Title</h2>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
              animi officiis accusamus suscipit optio molestias harum ratione{" "}
            </p>

            <p className="font-bold text-center my-4">99$</p>
          </div>{" "}
          <Button text="Add to Card" />
        </div>
        <div className="card w-60">
          <img src={Productimg} className="card-img mx-auto" />
          <div className="content">
            <h2 className="text-lg text-daisy-bush-600">Product Title</h2>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
              animi officiis accusamus suscipit optio molestias harum ratione{" "}
            </p>

            <p className="font-bold text-center my-4">99$</p>
          </div>{" "}
          <Button text="Add to Card" />
        </div>
        <div className="card w-60">
          <img src={Productimg} className="card-img mx-auto" />
          <div className="content">
            <h2 className="text-lg text-daisy-bush-600">Product Title</h2>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
              animi officiis accusamus suscipit optio molestias harum ratione{" "}
            </p>

            <p className="font-bold text-center my-4">99$</p>
          </div>{" "}
          <Button text="Add to Card" />
        </div>
        <div className="card w-60">
          <img src={Productimg} className="card-img mx-auto" />
          <div className="content">
            <h2 className="text-lg text-daisy-bush-600">Product Title</h2>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
              animi officiis accusamus suscipit optio molestias harum ratione{" "}
            </p>

            <p className="font-bold text-center my-4">99$</p>
          </div>{" "}
          <Button text="Add to Card" />
        </div>
        <div className="card w-60">
          <img src={Productimg} className="card-img mx-auto" />
          <div className="content">
            <h2 className="text-lg text-daisy-bush-600">Product Title</h2>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
              animi officiis accusamus suscipit optio molestias harum ratione{" "}
            </p>

            <p className="font-bold text-center my-4">99$</p>
          </div>{" "}
          <Button text="Add to Card" />
        </div>
      </Carousel>
    </div>
  );
};

export default RelateProduct;
