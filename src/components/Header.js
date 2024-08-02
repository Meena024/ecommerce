import { Navbar, Container, Button } from "react-bootstrap";

const Header = (props) => {
  return (
    <>
      <Navbar bg="dark" expand="sm" variant="dark" className="mb-1">
        <Container style={{ fontWeight: "900" }}>
          <Navbar.Brand href="/">HOME</Navbar.Brand>
          <Navbar.Brand href="/">STORE</Navbar.Brand>
          <Navbar.Brand href="/">ABOUT</Navbar.Brand>
          <div>
            <Button
              variant="outline-info"
              style={{ fontWeight: "900" }}
              onClick={props.onShow}
            >
              Cart
            </Button>{" "}
            <span style={{ color: "skyblue" }}>0</span>
          </div>
        </Container>
      </Navbar>
      <Navbar bg="secondary" expand="lg" variant="dark" className="pb-5">
        <Container>
          <Navbar.Brand
            style={{
              color: "white",
              fontWeight: "1000",
              fontSize: "100px",
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
