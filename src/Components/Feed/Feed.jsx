import React from "react";
import PostCard from "./PostCard";

import FeedInput from "./FeedInput";
const Feed = () => {
    const posts = [
        {
            id: 1,
            user: { name: "Surbhi Singh", avatar: "https://via.placeholder.com/48" },
            time: "2h ago",
            content: "Excited to start a new project with React + Bootstrap!",
            image: "https://via.placeholder.com/600x300",
            likes: 12,
            comments: 4,
        },
        {
            id: 2,
            user: { name: "John Doe", avatar: "https://via.placeholder.com/48" },
            time: "5h ago",
            content: "Just finished a full-stack app 🚀",
            likes: 34,
            comments: 10,
        },
    ];
    return (
        <div>
            <FeedInput />
            {posts.map((p) => (
                <PostCard key={p.id} {...p} />
            ))}
        </div>
    );
};

export default Feed;
