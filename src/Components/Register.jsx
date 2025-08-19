import React, { useState } from "react";
import { Card, Form, Button, Row, Col } from "react-bootstrap";

const Register = ({ onRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    if (username === password) {
      onRegister(); 
    } else {
      alert('Invalid Register. Username must equal password for now.');
    }
  };

  return (
    <div className="Register-container">
      <Card className="p-5 mb-3 shadow-sm">
        <Row className="text-center">
          <h2>Register</h2>
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
            <Button variant="light" className="w-100 text-muted" onClick={handleRegister}>
              Register
            </Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Register;
