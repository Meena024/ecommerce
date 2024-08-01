import { Navbar, Container } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <Navbar bg="info" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand style={{ color: "white", fontSize: "75px" }}>
            The Generics
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};
export default Footer;
