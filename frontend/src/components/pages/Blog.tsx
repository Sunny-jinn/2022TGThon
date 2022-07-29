import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../styles/Blog.css";
import { IPostState, PostsState } from "../../store/index";
import Card from "../layout/Card";
import { Link } from "react-router-dom";

interface Post {
  post: PostsState;
}

const Blog: React.FC = () => {
  const postList = useSelector((state: Post) => state.post.post);

  return (
    <div className="card-container">
      {postList.map((list: IPostState) => (
        <Card
          id={list.id}
          title={list.title}
          author={list.author}
          text={list.text}
        />
      ))}
      <Link to="/newpost">
        <button className="postBtn">글쓰기</button>
      </Link>
    </div>
    // <div>
    //   <div>
    //     <p>Title</p>
    //     <p>Author</p>
    //     <p>Text</p>
    //   </div>
    // </div>
  );
};

export default Blog;
