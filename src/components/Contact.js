import React, { useRef } from "react";
import { Form, Button, Card } from "react-bootstrap";

const Contact = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();

  async function submitHandler(e) {
    e.preventDefault();

    const user = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
    };

    const response = await fetch(
      "https://react-http-91c04-default-rtdb.firebaseio.com/ecommerce-contact.json",
      {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Something went wrong!");
    }
    nameRef.current.value = "";
    emailRef.current.value = "";
    phoneRef.current.value = "";
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
      }}
    >
      <Card
        style={{
          width: "30rem",
          align: "right",
          padding: "1rem",
        }}
        bg="info"
      >
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label
              style={{
                color: "white",
                fontSize: "1.5rem",
              }}
            >
              User Name
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              ref={nameRef}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label
              style={{
                color: "white",
                fontSize: "1.5rem",
              }}
            >
              Email address
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              ref={emailRef}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Label
              style={{
                color: "white",
                fontSize: "1.5rem",
              }}
            >
              Phone Number
            </Form.Label>
            <Form.Control
              type="number"
              placeholder="Phone Number"
              ref={phoneRef}
            />
          </Form.Group>
          <Button
            variant="secondary"
            style={{ fontWeight: "900" }}
            type="submit"
          >
            Cart
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default Contact;
