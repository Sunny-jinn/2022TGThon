import React from "react";
import { Route, Routes } from "react-router-dom";

import Blog from "./pages/Blog";
import NewPost from "./components/post/NewPost";
import Post from "./pages/Post";
import LoginPage from "./pages/LoginPage";
import RegisterationPage from "./pages/RegisterationPage";

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/registeration" element={<RegisterationPage />} />
        <Route path="/posts" element={<Blog />} />
        <Route path="/newpost" element={<NewPost />} />
        <Route path="/posts/:id" element={<Post />} />
      </Routes>
    </div>
  );
};

export default App;
