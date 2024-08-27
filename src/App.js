import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import Products from "./components/Pages/Product/Products";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./components/Cart/Cart";
import CartProvider from "./Context/CartProvider";
import About from "./components/Pages/About";
import Home from "./components/Pages/Home";
import Contact from "./components/Pages/Contact";
import ProductDetails from "./components/Pages/Product/ProductDetails";

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
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/store">
            <h1 style={{ fontFamily: "monospace" }}>COLORS</h1>
            <div className="text-center">
              <Products />
              <Button
                variant="secondary"
                className="p-3 m-5"
                style={{ color: "skyblue" }}
                onClick={showCart}
                // onHide={hideCart}
              >
                <h5>SEE THE CART</h5>
              </Button>
            </div>
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/product-Detail/:productId">
            <ProductDetails />
          </Route>
          {cartVisible && <Cart show={cartVisible} onHide={hideCart} />}
        </Container>
        <Footer />
      </Router>
    </CartProvider>
  );
};

export default App;
