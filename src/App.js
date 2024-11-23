import React, { useState, lazy, Suspense } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Button } from "react-bootstrap";
import CartProvider from "./Context/CartProvider";
import AuthContextProvider from "./Context/AuthContextProvider";
import PrivateRoute from "./components/PrivateRoute";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from "./components/Pages/Product/Products";

// const Contact = lazy(() => import("./components/Pages/Contact"));
const LazyAbout = () => {
  const About = lazy(() => import("./components/Pages/About"));
  return (
    <Suspense fallback={<div>Loading About...</div>}>
      <About />
    </Suspense>
  );
};
const Contact = lazy(() => import("./components/Pages/Contact"));
const Login = lazy(() => import("./components/Pages/Login"));
const Home = lazy(() => import("./components/Pages/Home"));
const ProductDetails = lazy(() =>
  import("./components/Pages/Product/ProductDetails")
);
const Cart = lazy(() => import("./components/Cart/Cart"));

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
            <Suspense fallback={<div>Loading...</div>}>
              <Route path="/home" element={<Home />} />
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
              <Route path="/about" component={LazyAbout} />
              <Route path="/contact" element={<Contact />} />
              <Route
                path="/product-Detail/:productId"
                element={<ProductDetails />}
              />
              <Route path="/login" element={<Login />} />
              {cartVisible && <Cart show={cartVisible} onHide={hideCart} />}
            </Suspense>
          </div>
          <Footer />
        </Router>
      </CartProvider>
    </AuthContextProvider>
  );
};

export default App;
