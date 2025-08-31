// Feed.js
import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import FeedInput from "./FeedInput";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/post`);
      const data = await res.json();
      setPosts(data);
    } catch (err) {
      console.error("Error fetching posts:", err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <FeedInput refreshPosts={fetchPosts} />
      {posts.map((p) => (
        <PostCard
          key={p.id}
          postId={p.id}  
          user={{ name: p.user_name, avatar: "https://via.placeholder.com/48" }}
          time={new Date(p.created_at).toLocaleString()}
          content={p.content}
          image={p.image_url}
          likes={p.likes || 0}       
          comments={p.comments || []} 
        />
      ))}
    </div>
  );
};

export default Feed;
