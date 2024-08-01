import React from "react";
import { Button, Col, Image } from "react-bootstrap";

const ProductItem = (props) => {
  return (
    <>
      <Col md="auto" className="m-5">
        <h2 className="justify-content-center m-2">{props.item.title}</h2>
        <Image src={props.item.imageUrl} rounded />
        <br />
        <br />
        <div>
          <span style={{ fontFamily: "sans-serif", fontSize: "x-large" }}>
            ${props.item.price}
          </span>
          <span className="justify-content-right m-5">
            <Button variant="info" style={{ color: "white" }}>
              <h5>ADD TO CART</h5>
            </Button>
          </span>
        </div>
      </Col>
    </>
  );
};

export default ProductItem;
