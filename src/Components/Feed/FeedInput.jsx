import React, { useState } from "react";
import { Card, Form, Button, Image, Row, Col } from "react-bootstrap";


const FeedInput = ({ userId, onPostCreated }) => {
  const [content, setContent] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [videoPreview, setVideoPreview] = useState(null);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

const handleFileChange = (e) => {
  const selectedFile = e.target.files[0];
  if (!selectedFile) return;

  setFile(selectedFile);
  if (selectedFile.type.startsWith("image/")) {
    setImagePreview(URL.createObjectURL(selectedFile));
    setVideoPreview(null);
  } else if (selectedFile.type.startsWith("video/")) {
    setVideoPreview(URL.createObjectURL(selectedFile));
    setImagePreview(null);
  }

  // Reset file input value so the same file selection triggers onChange next time
  e.target.value = "";
};

  const postData={content,imagePreview,videoPreview,file,loading}

  // Upload post
const handlePost = async () => {
  if (!content && !file) {
    alert("Please write something or attach a file.");
    return;
  }

  try {
    setLoading(true);

    const formData = new FormData();
    formData.append("user_id", userId);
    formData.append("content", content);
    if (file) formData.append("image", file); 

    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/post/create`, {
      method: "POST",
      body: formData, 
    });

    const data = await response.json();
    alert(data.message);

    setContent("");
    setImagePreview(null);
    setVideoPreview(null);
    setFile(null);
    onPostCreated?.();
  } catch (error) {
    console.error("Error creating post:", error);
    alert("Error posting. Try again.");
  } finally {
    setLoading(false);
  }
};

  return (
    <Card className="p-3 mb-3 shadow-sm">
      <Row className="align-items-center mb-3">
        <Col xs="auto">
          <Image
            src="https://via.placeholder.com/48"
            roundedCircle
            alt="Profile"
          />
        </Col>

        <Col>
          <Form.Control
            as="textarea"
            rows={2}
            placeholder="What's on your mind?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="rounded"
          />
        </Col>
      </Row>

      {(imagePreview || videoPreview) && (
        <div className="mb-3 text-center">
          {imagePreview && (
            <Image src={imagePreview} alt="Preview" fluid rounded />
          )}
          {videoPreview && (
            <video
              src={videoPreview}
              controls
              style={{ maxWidth: "100%", borderRadius: "8px" }}
            />
          )}
        </div>
      )}

      {/* File Picker */}
      <div className="d-flex justify-content-around mb-3">
        <Form.Label className="btn btn-light mb-0">
          📷 Photo
          <Form.Control
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            hidden
          />
        </Form.Label>

        <Form.Label className="btn btn-light mb-0">
          🎥 Video
          <Form.Control
            type="file"
            accept="video/*"
            onChange={handleFileChange}
            hidden
          />
        </Form.Label>
      </div>

      {/* Post Button */}
      <Button
        variant="primary"
        className="w-100 rounded-pill"
        onClick={handlePost}
        disabled={loading}
      >
        {loading ? "Posting..." : "Post"}
      </Button>
    </Card>
  );
};

export default FeedInput;
