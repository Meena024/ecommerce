import React, { useContext } from "react";
import { Button, Col, Image } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import CartContext from "../../../Context/CartContext";

const ProductItem = (props) => {
  const cartCtx = useContext(CartContext);
  const history = useHistory();

  const addToCartHandler = () => {
    cartCtx.addItem({ ...props.item, quantity: 1 });
  };

  const openProductDetailsHandler = () => {
    history.push({
      pathname: `/product-Detail/${props.item.id}`,
      state: { product: props.item },
    });
  };

  return (
    <>
      <Col md="auto" className="m-3">
        <h2 className="justify-content-center m-2">{props.item.title}</h2>
        <Image
          src={props.item.imageUrl}
          rounded
          style={{ transition: "transform 0.3s ease-in-out" }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          alt={props.item.title}
          onClick={openProductDetailsHandler}
        />
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
              onClick={addToCartHandler}
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
