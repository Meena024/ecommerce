import React, { useContext, useState, useEffect } from "react";
import { Col, Container, Row, Image, Button, Form } from "react-bootstrap";
import { useLocation, useHistory } from "react-router-dom";
import CartContext from "../../../Context/CartContext";

const ProductDetails = () => {
  const location = useLocation();
  const history = useHistory();
  const cartCtx = useContext(CartContext);

  const product = location.state ? location.state.product : null;

  const [selectedImage, setSelectedImage] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (!product) {
      history.push("/store");
    } else {
      const productImages =
        product.id === 1
          ? ["1a.jpg", "1b.jpg", "1c.jpg"]
          : product.id === 2
          ? ["2a.jpg", "2b.jpg"]
          : product.id === 3
          ? ["2c.jpg", "1c.jpg"]
          : ["1a.jpg", "2a.jpg"];

      setImages(productImages);
      setSelectedImage(productImages[0]);
    }
  }, [product, history]);

  if (!product) {
    return null;
  }

  const handleImageClick = (imageName) => {
    setSelectedImage(imageName);
  };

  const addToCartHandler = () => {
    cartCtx.addItem({ ...product, quantity: Number(quantity) });
  };

  return (
    <div>
      <h2 style={{ textAlign: "left" }}>Product Details</h2>
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <Image
              src={`/Images/${selectedImage}`}
              style={{ width: "100%", height: "80%", padding:"25px"}}
            />
            <Row className="mt-3">
              {images.map((imageName, index) => (
                <Col key={index}>
                  <Image
                    src={`/Images/${imageName}`}
                    alt={`Product ${index}`}
                    style={{
                      margin: "5px",
                      width: "500px",
                      height: "100px",
                      cursor: "pointer",
                    }}
                    thumbnail
                    onClick={() => handleImageClick(imageName)}
                  />
                </Col>
              ))}
            </Row>
          </Col>
          <Col md={4} className="d-flex flex-column justify-content-center">
            <h2>{product.title}</h2>
            <p>Price: ${product.price}</p>
            <Form.Group controlId="quantity">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="number"
                value={quantity}
                onChange={(e) =>
                  setQuantity(Math.min(Math.max(e.target.value, 1), 5))
                }
                min="1"
                max="5"
                step="1"
              />
            </Form.Group>
            <Button variant="info" onClick={addToCartHandler} style={{marginTop:"20px", padding:"10px"}}>
              Add to Cart
            </Button>
          </Col>
        </Row>{" "}
        <br />
        <br />
        <Row>
          <h2 style={{ textAlign: "left" }}>Reviews and ratings</h2>
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetails;
