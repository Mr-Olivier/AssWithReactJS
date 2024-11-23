import React from "react";
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { postId } = useParams();

  return (
    <div className="mt-6">
      <h3 className="text-2xl font-bold text-secondary">Blog Post {postId}</h3>
      <p className="mt-2 text-gray-700">
        This is the content for post ID: {postId}
      </p>
    </div>
  );
};

export default BlogPost;
