import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Card, Form, Button, Image, Row, Col } from "react-bootstrap";


const Login = () => {
    return (
        <div className="login-container">
            <Card className="p-5 mb-3 shadow-sm">
                <Row className='text-center'>
                    <h2 >Login</h2>
                </Row>
                <Row className="align-items-center">
                    <Col xs="auto">
                        <p>Username: </p>
                    </Col>
                    <Col>
                        <Form.Control
                            type="text"
                            placeholder=""
                            className="rounded-pill"
                        />
                    </Col>
                </Row>
                <Row className="align-items-center">
                    <Col xs="auto">
                        <p>Password: </p>
                    </Col>
                    <Col>
                        <Form.Control
                            type="text"
                            placeholder=""
                            className="rounded-pill"
                        />
                    </Col>
                </Row>

                <Row className="mt-3 text-center">
                    <Col>
                        <Button variant="light" className="w-100 text-muted">
                            Login
                        </Button>
                    </Col>
                </Row>
            </Card>
        </div>

    );
};

export default Login;