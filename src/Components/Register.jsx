import React, { useState } from "react";
import { Card, Form, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Register = ({ onRegister }) => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleRegister = async () => {
    const user = { username, password, phoneNumber, email, userType: "student" };

    try {
      console.log("API URL:", process.env.REACT_APP_API_URL);

      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/users/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      let data;
      try {
        data = await response.json();
      } catch {
        data = {};
      }

      if (response.ok) {
        alert(data.message || "User registered successfully");
        onRegister?.();
        navigate("/feed");
      } else {
        alert(data.message || "Registration failed");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Server error. Please try again later.");
    }
  };


  return (
    <div className="Register-container">
      <Row className="justify-content-center">
        <Col xs={12} md={10} lg={8} xl={7} xxl={6}>
        <Card className="p-4 mb-3 shadow-sm">
          <h2 className="text-center mb-4 primary" color="primary">Register</h2>

          <Form>
            {/* Username */}
            <Form.Group as={Row} className="mb-3" controlId="formUsername">
              <Form.Label column sm={3} className="text-sm-end">
                Username:
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="rounded-pill"
                />
              </Col>
            </Form.Group>

            {/* Password */}
            <Form.Group as={Row} className="mb-3" controlId="formPassword">
              <Form.Label column sm={3} className="text-sm-end">
                Password:
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="rounded-pill"
                />
              </Col>
            </Form.Group>

            {/* Email */}
            <Form.Group as={Row} className="mb-3" controlId="formEmail">
              <Form.Label column sm={3} className="text-sm-end">
                Email:
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-pill"
                />
              </Col>
            </Form.Group>

            {/* Phone Number */}
            <Form.Group as={Row} className="mb-3" controlId="formPhone">
              <Form.Label column sm={3} className="text-sm-end">
                Phone Number:
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="rounded-pill"
                />
              </Col>
            </Form.Group>

            {/* Register Button */}
            <Row className="mt-4">
              <Col className="text-center">
                <Button
                  variant="light"
                  className="w-50 text-muted"
                  onClick={handleRegister}
                >
                  Register
                </Button>
              </Col>
            </Row>
          </Form>
        </Card>
      </Col>
    </Row>
    </div >
  );
};

export default Register;
