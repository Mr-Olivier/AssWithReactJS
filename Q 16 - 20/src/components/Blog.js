import React from "react";
import { Link, Outlet } from "react-router-dom";

const Blog = () => {
  const posts = [
    { id: 1, title: "React Basics" },
    { id: 2, title: "React Router" },
    { id: 3, title: "State Management" },
  ];

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-primary">Blog</h2>
      <ul className="mt-4 list-disc pl-6">
        {posts.map((post) => (
          <li key={post.id}>
            <Link
              to={`/blog/${post.id}`}
              className="text-blue-500 hover:underline"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
};

export default Blog;
