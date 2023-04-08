import React from "react";
import Content from "../features/singleProduct/Content";
import Container from "../features/container/Container";
import Description from "../features/singleProduct/Description";
import RelateProduct from "../features/singleProduct/RelateProduct";

const SingleProduct = () => {
  return (
    <Container>
      <div className="my-20 pt-40">
        <Content />
        <Description />
        <RelateProduct />
      </div>
    </Container>
  );
};

export default SingleProduct;
