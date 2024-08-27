// Products.js
import React from "react";
import ProductItem from "./ProductItem";
import { Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Products = () => {
  const productsArr = [
    {
      id: 1,
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      id: 2,
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      id: 3,
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      id: 4,
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  const history = useHistory();

  const openProductDetailsHandler = (product) => {
    history.push({
      pathname: `/product-Detail/${product.id}`,
      state: { product },
    });
  };

  const products = productsArr.map((product) => (
    <ProductItem
      key={product.id}
      item={product}
      onClick={() => openProductDetailsHandler(product)}
    />
  ));

  return <Row className="justify-content-center">{products}</Row>;
};

export default Products;
