import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Feed from "./Feed/Feed";

const Layout = () => {
  return (
    <Container fluid className="mt-4">
      <Row className="justify-content-center">
        <Col xs={12} md={10} lg={8} xl={7} xxl={6}>
          <Feed />
        </Col>
      </Row>
    </Container>
  );
};

export default Layout;
