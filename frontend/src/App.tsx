import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Blog from "./components/pages/Blog";
import NewPost from "./components/pages/NewPost";
import Post from "./components/pages/Post";

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Blog />} />
        <Route path="/newpost" element={<NewPost />} />
        <Route path="/posts/:id" element={<Post />} />
      </Routes>
    </div>
  );
};

export default App;
