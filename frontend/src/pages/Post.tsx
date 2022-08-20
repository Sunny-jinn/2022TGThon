import { Viewer } from "@toast-ui/react-editor";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { PostsState } from "../store";

interface Posts {
  post: PostsState;
}

const Post: React.FC = () => {
  const params = useParams();

  const tempPost = useSelector((state: Posts) => state.post.post);
  const post = tempPost.filter((list) => list.id === params.id);
  return (
    <div className="blog">
      <p>{post[0].title}</p>
      <p>{post[0].author}</p>
      <Viewer initialValue={post[0].markdown} />
    </div>
  );
};

export default Post;
