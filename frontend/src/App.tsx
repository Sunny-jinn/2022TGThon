import React from "react";
import { Route, Routes } from "react-router-dom";

import Blog from "./pages/PostMain";
import NewPost from "./components/post/NewPost";
import Post from "./pages/PostDetail";
import LoginPage from "./pages/LoginPage";
import RegisterationPage from "./pages/RegisterationPage";
import Template from "./pages/Template";

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterationPage />} />
        <Route path="/posts" element={<Blog />} />
        <Route path="/newpost" element={<NewPost />} />
        <Route path="/posts/:id" element={<Post />} />
        <Route path="/start" element={<Template />} />
      </Routes>
    </div>
  );
};

export default App;
