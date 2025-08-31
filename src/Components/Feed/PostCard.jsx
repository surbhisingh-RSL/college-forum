import React, { useState } from "react";
import { Card, Row, Col, Image, Button, Form, InputGroup } from "react-bootstrap";
const BASE_URL = process.env.REACT_APP_API_URL;

const PostCard = ({ postId, user, time, content, image, likes: initialLikes, comments: initialComments }) => {
  const [likes, setLikes] = useState(initialLikes || 0);
  const [comments, setComments] = useState(initialComments || []);
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState("");

  console.log("c==>", comments)
  const handleLike = async () => {
    console.log("postId", postId)
    try {
      setLikes(likes + 1);
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/post/like`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ postId }),
      });
      if (!res.ok) throw new Error("Failed to like post");
    } catch (err) {
      console.error(err);
      setLikes(likes);
    }
  };


  const toggleComments = () => {
    setShowComments(!showComments);
  };

  const handleAddComment = async () => {
    if (!newComment.trim()) return;

    const commentObj = { id: Date.now(), text: newComment };

    try {
      setComments([...comments, commentObj]);
      setNewComment("");

      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/post/comment`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: commentObj.text, postId
        }),
      });

      if (!res.ok) throw new Error("Failed to add comment");
    } catch (err) {
      console.error(err);
      setComments(comments); // Rollback
    }
  };
  return (
    <Card className="mb-3 shadow-sm">
      <Card.Body>
        {/* Header */}
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

        {/* Content */}
        {content && <Card.Text>{content}</Card.Text>}
        <Image
          src={image ? `${BASE_URL}${image}` : null}
          alt="Post"
          fluid
          rounded
          className="mb-2 mx-auto d-block"
        />


        {/* Stats */}
        <Row className="mb-2 text-muted">
          <Col>
            👍 {likes} • 💬 {comments.length}
          </Col>
        </Row>

        <hr className="my-2" />

        {/* Action Buttons */}
        <Row className="text-center">
          <Col>
            <Button variant="light" className="w-100 text-muted" onClick={handleLike}>
              👍 Like
            </Button>
          </Col>
          <Col>
            <Button variant="light" className="w-100 text-muted" onClick={toggleComments}>
              💬 Comment
            </Button>
          </Col>
          <Col>
            <Button variant="light" className="w-100 text-muted">
              ↗️ Share
            </Button>
          </Col>
        </Row>

        {/* Comment Section */}
        {showComments && (
          <div className="mt-3">
            {comments.map((c) => (
              <div key={c.id} className="border-top pt-2 text-muted" style={{ fontSize: "0.9rem" }}>
                <strong>{c.user_name}:</strong> {c.comment}
              </div>
            ))}

            <InputGroup className="mt-3">
              <Form.Control
                type="text"
                placeholder="Write a comment..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
              <Button variant="primary" onClick={handleAddComment}>Post</Button>
            </InputGroup>
          </div>
        )}

      </Card.Body>
    </Card>
  );
};

export default PostCard;
