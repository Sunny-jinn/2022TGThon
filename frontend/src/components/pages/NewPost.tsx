import React, { ReactEventHandler, useRef, useState } from "react";
import { Editor, Viewer } from "@toast-ui/react-editor";
import { useDispatch, useSelector } from "react-redux";
import { PostsState, postActions } from "../../store";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const NewPost = () => {
  const editRef = useRef<Editor>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const clickHandler = () => {
    axios.post("/posts/new", {
      post: {
        title: titleRef.current?.value,
        author: "sunny",
        description: descRef.current?.value,
        markdown: editRef.current?.getInstance().getMarkdown(),
      },
    });

    navigate("/posts");
  };

  return (
    <div className="new-post">
      <div>
        <input ref={titleRef} className="title" placeholder="Title" />
      </div>
      <div>
        <input
          ref={descRef}
          className="description"
          placeholder="description"
        />
      </div>
      <Editor previewStyle="vertical" height="600px" ref={editRef} />
      <button onClick={clickHandler}>포스트</button>
    </div>
  );
};

export default NewPost;
