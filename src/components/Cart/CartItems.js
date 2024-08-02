import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const CartItems = () => {
  let total = 0;
  const [cartElements, setCartElements] = useState([
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      quantity: 2,
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      quantity: 3,
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      quantity: 1,
    },
  ]);

  const removeItemFromCart = (title) => {
    setCartElements(cartElements.filter((element) => element.title !== title));
  };

  let cartList = cartElements.map((item) => {
    total += item.price * item.quantity;
    return (
      <Row
        key={item.title}
        style={{
          fontWeight: "lighter",
        }}
      >
        <Col xs={6}>{item.title}</Col>
        <Col>{item.price}</Col>
        <Col>{item.quantity}</Col>
        <Col>
          <Button
            variant="info"
            className="m-1"
            onClick={() => removeItemFromCart(item.title)}
          >
            Remove
          </Button>
        </Col>
      </Row>
    );
  });
  return (
    <>
      <Container
        style={{
          fontWeight: "bold",
        }}
      >
        <Row>
          <Col xs={6}>ITEM</Col>
          <Col>PRICE</Col>
          <Col>QUANTITY</Col>
          <Col>UPDATE</Col>
        </Row>
        {cartList}
        <Row>TOTAL: ${total}</Row>
      </Container>
    </>
  );
};

export default CartItems;
