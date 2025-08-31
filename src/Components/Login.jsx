import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, Form, Button, Row, Col } from "react-bootstrap";

const Login = ({onLogin}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/users/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Login failed");
        return;
      }

      localStorage.setItem("token", data.token); // store token
      alert("Login successful!");
      onLogin() // redirect after login
    } catch (error) {
      console.error("Error logging in:", error);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="login-container">
      <Row className="justify-content-center">
        <Col xs={12} md={10} lg={8} xl={7} xxl={6}>
          <Card className="p-5 mb-3 shadow-sm ">
            <Row className="text-center">
              <h2 color="primary">Login</h2>
            </Row>
            <Row className="align-items-center mt-3">
              <Col xs="auto">
                <p>Username:</p>
              </Col>
              <Col>
                <Form.Control
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="rounded-pill"
                />
              </Col>
            </Row>
            <Row className="align-items-center mt-3">
              <Col xs="auto">
                <p>Password:</p>
              </Col>
              <Col>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="rounded-pill"
                />
              </Col>
            </Row>
            <Row className="mt-4 text-center">
              <Col>
                <Button variant="primary" className="w-100" onClick={handleLogin}>
                  Login
                </Button>
              </Col>
            </Row>
            <Row className="mt-2">
              <Col className="text-end">
                <small>
                  Not registered yet? <Link to="/register">Click here to sign up</Link>
                </small>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
