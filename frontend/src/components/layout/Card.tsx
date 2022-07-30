import React, { ReactEventHandler } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Blog.css";

interface PostState {
  id: number;
  title: string;
  author: string;
  text: string;
}

const Card = (props: PostState) => {
  const navigate = useNavigate();

  const clickHandler = (id: number) => {
    navigate(`/posts/${id}`);
  };

  return (
    <div className="card">
      <div className="card-title" onClick={() => clickHandler(props.id)}>
        {props.title}
      </div>
      <div className="card-author">{props.author}</div>
      <div className="card-text">{props.text}</div>
    </div>
  );
};

export default Card;
