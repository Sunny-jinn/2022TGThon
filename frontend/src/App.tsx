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
        <Route path="/registeration" element={<RegisterationPage />} />
        <Route path="/@:userId/posts" element={<Blog />} />
        <Route path="/@:userId/newpost" element={<NewPost />} />
        <Route path="/@:userId/posts/:id" element={<Post />} />
        <Route path="/@:userId/start" element={<Template />} />
      </Routes>
    </div>
  );
};

export default App;
