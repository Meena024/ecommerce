import { Modal, Button } from "react-bootstrap";
import CartItems from "./CartItems";

const Cart = (props) => {
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{
          fontFamily: "revert",
          align: "center",
        }}
      >
        <Modal.Header closeButton>
          <div className="w-100 d-flex justify-content-center">
            <Modal.Title>CART</Modal.Title>
          </div>
        </Modal.Header>

        <Modal.Body>
          <CartItems />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="info">PURCHASE</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default Cart;
