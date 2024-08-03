import React, { useContext } from "react";
import { Button, Col, Image } from "react-bootstrap";
import CartContext from "../Context/CartContext";

const ProductItem = (props) => {
  const cartCtx = useContext(CartContext);

  const addItemToCartHandler = () => {
    cartCtx.addItem({ ...props.item });
  };
  return (
    <>
      <Col md="auto" className="m-5">
        <h2 className="justify-content-center m-2">{props.item.title}</h2>
        <Image src={props.item.imageUrl} rounded />
        <br />
        <br />
        <div>
          <span
            className="mr-5"
            style={{ fontFamily: "sans-serif", fontSize: "x-large" }}
          >
            ${props.item.price}
          </span>
          <span className="m-5">
            <Button
              variant="info"
              style={{ color: "white" }}
              onClick={addItemToCartHandler}
            >
              <h5>ADD TO CART</h5>
            </Button>
          </span>
        </div>
      </Col>
    </>
  );
};

export default ProductItem;
