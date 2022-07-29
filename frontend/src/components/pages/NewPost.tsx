import React, { ReactEventHandler, useRef, useState } from "react";
import { Editor, Viewer } from "@toast-ui/react-editor";
import { useDispatch, useSelector } from "react-redux";
import { PostsState, postActions } from "../../store";
import { useNavigate } from "react-router-dom";

const NewPost = () => {
  const editRef = useRef<Editor>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const clickHandler = () => {
    console.log(editRef.current?.getInstance().getHTML());
    console.log(editRef.current?.getInstance().getMarkdown());
    dispatch(
      postActions.addPost({
        id: 4,
        title: "제목",
        author: "Sunnyjin",
        text: editRef.current?.getInstance().getHTML(),
        markdown: editRef.current?.getInstance().getMarkdown(),
      })
    );
    navigate("/posts");
  };

  return (
    <div>
      <Editor previewStyle="vertical" height="600px" ref={editRef} />
      <button onClick={clickHandler}>HIHI</button>
    </div>
  );
};

export default NewPost;
