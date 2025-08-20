import React, { useState } from "react";
import { Card, Form, Button, Row, Col } from "react-bootstrap";

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (username === password) {
            onLogin();
        } else {
            alert('Invalid login. Username must equal password for now.');
        }
    };

    return (
        <div className="login-container">
            {
            /* <Card className="p-4 mt-4 shadow-sm" style={{ maxWidth: '400px', margin: 'auto' }}> */}
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
                        </Card>
                    </Col>
                </Row>
            {/* </Card> */}
        </div>
    );
};

export default Login;
