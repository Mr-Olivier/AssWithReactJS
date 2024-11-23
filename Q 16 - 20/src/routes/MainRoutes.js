import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";
import ProductDetails from "../components/ProductDetails";
import NotFound from "../components/NotFound";
import Blog from "../components/Blog";
import BlogPost from "../components/BlogPost";

const MainRoutes = () => {
  console.log("Rendering nav...");
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/blog" element={<Blog />}>
        <Route path=":postId" element={<BlogPost />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default MainRoutes;
