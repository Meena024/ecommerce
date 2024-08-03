import { Navbar, Container, Button, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartContext from "../Context/CartContext";
import { useContext } from "react";

const Header = (props) => {
  const cartCtx = useContext(CartContext);
  return (
    <>
      <Navbar fixed="top" bg="dark" expand="sm" variant="dark" className="pb-3">
        <Container style={{ fontWeight: "900" }}>
          <Navbar.Brand as={Link} to="/">
            HOME
          </Navbar.Brand>
          <Navbar.Brand as={Link} to="/">
            STORE
          </Navbar.Brand>
          <Navbar.Brand as={Link} to="/about">
            ABOUT
          </Navbar.Brand>
          <div>
            <Button
              variant="outline-info"
              style={{ fontWeight: "900" }}
              onClick={props.onShow}
            >
              Cart
            </Button>

            <Badge pill bg="dark" className="ml-3">
              <h4>{cartCtx.totalQuantity}</h4>
            </Badge>
          </div>
        </Container>
      </Navbar>
      <br />
      <br />
      <br />
      <Navbar bg="secondary" expand="lg" variant="dark" className="pb-5">
        <Container className="d-flex justify-content-center">
          <Navbar.Brand
            className="mt-2"
            style={{
              color: "white",
              fontWeight: "1000",
              fontSize: "100px",
              fontFamily: "initial",
            }}
          >
            The Generics
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
