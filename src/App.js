import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import Products from "./components/Products";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";
import Cart from "./components/Cart/Cart";
import CartProvider from "./Context/CartProvider";
import About from "./components/About";
import Home from "./components/Home";

const App = () => {
  let [cartVisible, setCartVisible] = useState(false);
  const showCart = () => {
    setCartVisible(true);
  };
  const hideCart = () => {
    setCartVisible(false);
  };

  return (
    <CartProvider>
      <Router>
        <Header onShow={showCart} />
        <Container className="text-center m-5">
          <Routes>
            <Route
              path="/store"
              element={
                <>
                  <h1 style={{ fontFamily: "monospace" }}>COLORS</h1>
                  <Products />
                  <div className="text-center">
                    <Button
                      variant="secondary"
                      className="p-3 m-5"
                      style={{ color: "skyblue" }}
                      onClick={showCart}
                      onHide={hideCart}
                    >
                      <h5>SEE THE CART</h5>
                    </Button>
                  </div>
                </>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Home />} />
          </Routes>
          {cartVisible && <Cart show={cartVisible} onHide={hideCart} />}
        </Container>
        <Footer />
      </Router>
    </CartProvider>
  );
};

export default App;
