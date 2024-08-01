import React from "react";
import ProductItem from "./ProductItem";
import { Row } from "react-bootstrap";

const Products = () => {
  const productsArr = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];
  const products = productsArr.map((product) => {
    return <ProductItem item={product} />;
  });
  console.log(products, productsArr);
  return (
    <>
      <Row className="justify-content-center my-3">{products}</Row>
    </>
  );
};

export default Products;
