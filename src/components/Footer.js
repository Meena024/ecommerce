import { Navbar, Container } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <Navbar bg="info" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand
            className="m-3"
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
export default Footer;
