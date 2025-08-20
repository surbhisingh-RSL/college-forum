import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Layout = ({ children }) => {
  return (
    <Container fluid className="mt-4">
      <Row className="justify-content-center">
        <Col xs={12} md={10} lg={8} xl={7} xxl={6}>
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default Layout;
