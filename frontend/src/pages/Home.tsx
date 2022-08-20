import React from "react";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div>
      <Link to="/posts">
        <button>시작하기</button>
      </Link>
    </div>
  );
};

export default Home;
