import React, { ReactEventHandler, useRef, useState } from "react";
import { Editor, Viewer } from "@toast-ui/react-editor";
import { useDispatch, useSelector } from "react-redux";
import { PostsState, postActions } from "../store";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const NewPost = () => {
  const [thumbImg, setThumbImg] = useState("");

  const editRef = useRef<Editor>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLTextAreaElement>(null);
  const imgRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const clickHandler = () => {
    axios.post("/posts/new", {
      post: {
        title: titleRef.current?.value,
        author: "sunny",
        description: descRef.current?.value,
        markdown: editRef.current?.getInstance().getMarkdown(),
        thumbnail: thumbImg,
      },
    });

    navigate("/posts");
  };

  const uploadImageHandler = () => {
    imgRef.current?.click();
  };

  const changeImageHandler = (e: any) => {
    e.preventDefault();
    // console.log(e.target.files[0]);
    // console.log(URL.createObjectURL(e.target.files[0]));
    setThumbImg(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="new-post">
      <div className="new-post-box">
        <div className="new-post-left">
          <div className="title-box">
            <input
              ref={titleRef}
              className="title"
              placeholder="제목을 입력하세요."
            />
          </div>
          <div className="description-box">
            <textarea
              ref={descRef}
              className="description"
              placeholder="간단한 설명을 해주세요."
            />
          </div>
        </div>
        <div className="new-post-right">
          <div className="image-box">
            <input
              type="file"
              accept="image/*"
              className="image-input"
              ref={imgRef}
              onChange={changeImageHandler}
            />
            <label className="input-label" onClick={uploadImageHandler}>
              썸네일 업로드
            </label>
            <img src={thumbImg} alt="썸네일을 업로드 해보세요" />
          </div>
        </div>
      </div>
      <div className="new-post-editor">
        <Editor previewStyle="vertical" height="600px" ref={editRef} />
      </div>
      <button onClick={clickHandler}>포스트</button>
    </div>
  );
};

export default NewPost;
