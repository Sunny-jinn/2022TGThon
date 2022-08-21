import React, { ReactEventHandler } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../../assets/styles/blog.css";
import axios from "axios";
import { postActions } from "../../store/index";
import { useDispatch, useSelector } from "react-redux";
import { IPostState, PostsState } from "../../store/index";

interface PostState {
  id: string;
  title: string;
  author: string;
  description: string;
  thumbnail: string;
}

interface Post {
  post: PostsState;
}

const Card = (props: PostState) => {
  // const postList = useSelector((state: Post) => state.post.post);
  const userId = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const clickHandler = (id: string) => {
    navigate(`/@${userId.userId}/posts/${id}`);
  };

  const deleteHandler = async (id: string) => {
    dispatch(postActions.deletePost(id));
    await axios
      .delete("/posts/delete", {
        data: {
          id: id,
        },
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="card">
      <div className="card-thumbnail">
        <img src={`http://localhost:5000${props.thumbnail}`} alt="hi" />
      </div>
      <div className="card-main">
        <div className="card-title" onClick={() => clickHandler(props.id)}>
          {props.title}
        </div>
        <div className="card-author">{props.author}</div>
        <div className="card-text">{props.description}</div>
        <button onClick={() => deleteHandler(props.id)}>삭제</button>
      </div>
    </div>
  );
};

export default Card;
