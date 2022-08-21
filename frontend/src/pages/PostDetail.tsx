import { Viewer } from "@toast-ui/react-editor";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { PostsState } from "../store";
import { Link } from "react-router-dom";
import "../assets/styles/post-detail.css";

interface Posts {
  post: PostsState;
}

const Post: React.FC = () => {
  const params = useParams();

  const tempPost = useSelector((state: Posts) => state.post.post);
  const post = tempPost.filter((list) => list.id === params.id);
  return (
    <div>
      <div className="header">
        <h1>{post[0].title}</h1>
      </div>
      <div className="row">
        <div className="post">
          <h5>{post[0].author}</h5>
          <div className="markdown">
            <Viewer initialValue={post[0].markdown} />
          </div>
        </div>
      </div>
      <Link to={`/@${params.userId}/newpost`}>
        <button className="postBtn">글쓰기</button>
      </Link>
    </div>
  );
};

export default Post;
