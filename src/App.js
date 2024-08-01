import "./App.css";
import { Button, Container } from "react-bootstrap";
import Products from "./components/Products";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Container className="text-center m-5">
        <h1 style={{ fontFamily: "monospace" }}>COLORS</h1>
        <Products />
        <div className="text-center">
          <Button
            variant="secondary"
            className="p-3 m-5"
            style={{ color: "skyblue" }}
          >
            <h5>SEE THE CART</h5>
          </Button>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default App;
