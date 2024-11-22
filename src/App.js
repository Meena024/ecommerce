import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Button } from "react-bootstrap";
import Products from "./components/Pages/Product/Products";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./components/Cart/Cart";
import CartProvider from "./Context/CartProvider";
import About from "./components/Pages/About";
import Login from "./components/Pages/Login";
import Home from "./components/Pages/Home";
import Contact from "./components/Pages/Contact";
import ProductDetails from "./components/Pages/Product/ProductDetails";
import AuthContextProvider from "./Context/AuthContextProvider";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  let [cartVisible, setCartVisible] = useState(false);
  const showCart = () => {
    setCartVisible(true);
  };
  const hideCart = () => {
    setCartVisible(false);
  };

  return (
    <AuthContextProvider>
      <CartProvider>
        <Router>
          <Header onShow={showCart} />
          <div className="text-center m-5">
            <Route path="/home">
              <Home />
            </Route>
            <PrivateRoute path="/store">
              <h1 style={{ fontFamily: "monospace" }}>COLORS</h1>
              <div className="text-center">
                <Products />
                <Button
                  variant="secondary"
                  className="p-3 m-5"
                  style={{ color: "skyblue" }}
                  onClick={showCart}
                >
                  <h5>SEE THE CART</h5>
                </Button>
              </div>
            </PrivateRoute>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/product-Detail/:productId">
              <ProductDetails />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            {cartVisible && <Cart show={cartVisible} onHide={hideCart} />}
          </div>
          <Footer />
        </Router>
      </CartProvider>
    </AuthContextProvider>
  );
};

export default App;
