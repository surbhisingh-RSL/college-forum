import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Feed from "./Feed/Feed";

import Login from './Login';

const Layout = () => {
  let page;
  let isLoggedIn = false
  if (isLoggedIn) {
    page = <Feed />
  } else {
    page = <Login />
  }
  return (
    <Container fluid className="mt-4">
      <Row className="justify-content-center">
        <Col xs={12} md={10} lg={8} xl={7} xxl={6}>
          {page}
        </Col>
      </Row>
    </Container>
  );
};

export default Layout;
