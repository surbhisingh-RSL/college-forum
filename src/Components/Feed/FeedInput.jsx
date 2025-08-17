import React from "react";
import { Card, Form, Button, Image, Row, Col } from "react-bootstrap";

const FeedInput = () => {
  return (
    <Card className="p-3 mb-3 shadow-sm">
      <Row className="align-items-center">
        {/* User Avatar */}
        <Col xs="auto">
          <Image
            src="https://via.placeholder.com/48"
            roundedCircle
            alt="Profile"
          />
        </Col>

        {/* Input Box */}
        <Col>
          <Form.Control
            type="text"
            placeholder="Start a post..."
            className="rounded-pill"
          />
        </Col>
      </Row>

      {/* Post Action Buttons */}
      <Row className="mt-3 text-center">
        <Col>
          <Button variant="light" className="w-100 text-muted">
            📷 Photo
          </Button>
        </Col>
        <Col>
          <Button variant="light" className="w-100 text-muted">
            🎥 Video
          </Button>
        </Col>
        <Col>
          <Button variant="light" className="w-100 text-muted">
            📅 Event
          </Button>
        </Col>
      </Row>
    </Card>
  );
};

export default FeedInput;
