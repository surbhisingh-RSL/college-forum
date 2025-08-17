import React from "react";
import { Card, Row, Col, Image, Button } from "react-bootstrap";

const PostCard = ({ user, time, content, image, likes, comments }) => {
  return (
    <Card className="mb-3 shadow-sm">
      {/* Header */}
      <Card.Body>
        <Row className="align-items-center mb-2">
          <Col xs="auto">
            <Image
              src={user.avatar}
              roundedCircle
              width={48}
              height={48}
              alt="User Avatar"
            />
          </Col>
          <Col>
            <h6 className="mb-0">{user.name}</h6>
            <small className="text-muted">{time}</small>
          </Col>
        </Row>

        {/* PostCard Content */}
        <Card.Text>{content}</Card.Text>
        {image && (
          <Image
            src={image}
            alt="PostCard"
            fluid
            rounded
            className="mb-2"
          />
        )}

        {/* Stats */}
        <Row className="mb-2 text-muted">
          <Col>
            👍 {likes} • 💬 {comments}
          </Col>
        </Row>

        <hr className="my-2" />

        {/* Action Buttons */}
        <Row className="text-center">
          <Col>
            <Button variant="light" className="w-100 text-muted">
              👍 Like
            </Button>
          </Col>
          <Col>
            <Button variant="light" className="w-100 text-muted">
              💬 Comment
            </Button>
          </Col>
          <Col>
            <Button variant="light" className="w-100 text-muted">
              ↗️ Share
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default PostCard;
