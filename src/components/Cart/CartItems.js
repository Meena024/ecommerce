import { useContext } from "react";
import { Container, Row, Col, Button, ButtonGroup } from "react-bootstrap";
import CartContext from "../../Context/CartContext";

const CartItems = () => {
  const cartCtx = useContext(CartContext);
  let total = 0;

  let cartList = cartCtx.items.map((item) => {
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
          <ButtonGroup aria-label="Basic example" className="m-1">
            <Button
              variant="info"
              onClick={() => cartCtx.decreaseItemQty(item.title)}
            >
              -
            </Button>
            <Button
              variant="info"
              onClick={() => cartCtx.increaseItemQty(item.title)}
            >
              +
            </Button>
          </ButtonGroup>
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
