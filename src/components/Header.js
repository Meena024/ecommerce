import { Navbar, Container, Button, Badge, Nav } from "react-bootstrap";
import { Link, NavLink, useLocation } from "react-router-dom";
import CartContext from "../Context/CartContext";
import AuthContext from "../Context/AuthContext";
import { useContext } from "react";

const Header = (props) => {
  const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);
  const location = useLocation();
  const logoutHandler = () => {
    authCtx.logout();
  };

  return (
    <>
      <Navbar fixed="top" bg="dark" expand="sm" variant="dark" className="pb-3">
        <Container style={{ fontWeight: "900" }}>
          <Nav>
            <NavLink to="/home" style={{ fontWeight: "1000", color: "white" }}>
              HOME
            </NavLink>
          </Nav>
          <Navbar.Brand as={Link} to="/store">
            STORE
          </Navbar.Brand>
          <Navbar.Brand as={Link} to="/about">
            ABOUT
          </Navbar.Brand>
          <Navbar.Brand as={Link} to="/contact">
            CONTACT US
          </Navbar.Brand>
          {authCtx.isLoggedIn ? (
            <Navbar.Brand as={Link} to="/" onClick={logoutHandler}>
              LOGOUT
            </Navbar.Brand>
          ) : (
            <Navbar.Brand as={Link} to="/login">
              LOGIN
            </Navbar.Brand>
          )}
          {authCtx.isLoggedIn && (
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
          )}
        </Container>
      </Navbar>
      <br />
      <br />
      <br />
      <Navbar bg="secondary" expand="lg" variant="dark" className="pb-5">
        <Container className="d-flex flex-column align-items-center">
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
          {location.pathname === "/home" && (
            <div>
              <Button
                variant="outline-info"
                style={{
                  fontWeight: "bold",
                  marginTop: "20px",
                  alignSelf: "center",
                  fontSize: "30px",
                }}
              >
                Get Our Latest Album
              </Button>
            </div>
          )}
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
